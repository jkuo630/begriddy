from flask import Flask, jsonify, request, Response, send_from_directory
from flask_cors import CORS
import cv2
import mediapipe as mp
import numpy as np
from flask_socketio import SocketIO
import os

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})
socketio = SocketIO(app, cors_allowed_origins="*", async_mode="threading")

mp_drawing = mp.solutions.drawing_utils
mp_pose = mp.solutions.pose

cap = cv2.VideoCapture(0)

# Curl counter variables
counter = 0
stage = None

# Path to save video in public folder
public_folder_path = os.path.join(os.getcwd(), 'frontend', 'public')
output_video_path = os.path.join(public_folder_path, 'output_video.mp4')

# Ensure the public folder exists
if not os.path.exists(public_folder_path):
    os.makedirs(public_folder_path)

# VideoWriter to save the video to file
fourcc = cv2.VideoWriter_fourcc(*'mp4v')  # Use mp4v codec for MP4 format
output_video = None

leaderboard = [
    {
        "pfp": "/pfps/jason.jpg",
        "username": "jkuo630",
        "score": 1200,
        "location": "UBC",
        "postTime": "2hr ago",
        "postMedia": "/jason.mp4",
    },
    {
        "pfp": "/pfps/jay.png",
        "username": "therealjaypark",
        "score": 980,
        "location": "SFU",
        "postTime": "3hr ago",
        "postMedia": "/jay.mp4",
    },
    {
        "pfp": "/pfps/joanna.png",
        "username": "leejoannx",
        "score": 1120,
        "location": "Vancouver",
        "postTime": "4hr ago",
        "postMedia": "/joanna.mp4",
    },
    {
        "pfp": "/pfps/henry.png",
        "username": "henryleung1",
        "score": 890,
        "location": "Burnaby",
        "postTime": "5hr ago",
        "postMedia": "/henry.mp4",
    },
    {
        "pfp": "/pfps/pauline.png",
        "username": "paulineongchan",
        "score": 1030,
        "location": "Burnaby",
        "postTime": "5hr ago",
        "postMedia": "/pauline.mp4",
    },
    {
        "pfp": "/pfps/kevin.png",
        "username": "kxiao33",
        "score": 950,
        "location": "Burnaby",
        "postTime": "5hr ago",
        "postMedia": "/kevin.mp4",
    },
]

def calculate_angle(a, b, c):
    a = np.array(a)  # First
    b = np.array(b)  # Mid
    c = np.array(c)  # End

    radians = np.arctan2(c[1] - b[1], c[0] - b[0]) - np.arctan2(a[1] - b[1], a[0] - b[0])
    angle = np.abs(radians * 180.0 / np.pi)

    if angle > 180.0:
        angle = 360 - angle

    return angle

def generate_frames():
    global counter, stage, output_video
    with mp_pose.Pose(min_detection_confidence=0.5, min_tracking_confidence=0.5) as pose:
        while cap.isOpened():
            ret, frame = cap.read()
            if not ret:
                break

            # Resize the frame to a specific resolution (e.g., 640x480)
            frame = cv2.resize(frame, (640, 480))

            # Recolor image to RGB
            image = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
            image.flags.writeable = False

            # Make detection
            results = pose.process(image)

            # Recolor back to BGR
            image.flags.writeable = True
            image = cv2.cvtColor(image, cv2.COLOR_RGB2BGR)

            # Extract landmarks and calculate angles
            try:
                landmarks = results.pose_landmarks.landmark

                # Get coordinates for shoulder, elbow, and wrist
                shoulder = [landmarks[mp_pose.PoseLandmark.LEFT_SHOULDER.value].x,
                            landmarks[mp_pose.PoseLandmark.LEFT_SHOULDER.value].y]
                elbow = [landmarks[mp_pose.PoseLandmark.LEFT_ELBOW.value].x,
                         landmarks[mp_pose.PoseLandmark.LEFT_ELBOW.value].y]
                wrist = [landmarks[mp_pose.PoseLandmark.LEFT_WRIST.value].x,
                         landmarks[mp_pose.PoseLandmark.LEFT_WRIST.value].y]

                # Calculate angle
                angle = calculate_angle(shoulder, elbow, wrist)

                # Curl counter logic
                if angle > 160:
                    stage = "down"
                if angle < 30 and stage == 'down':
                    stage = "up"
                    counter += 1
                    socketio.emit('update_counter', {'counter': counter})

            except:
                pass

            # Render detections
            mp_drawing.draw_landmarks(image, results.pose_landmarks, mp_pose.POSE_CONNECTIONS,
                                      mp_drawing.DrawingSpec(color=(245, 117, 66), thickness=2, circle_radius=2),
                                      mp_drawing.DrawingSpec(color=(245, 66, 230), thickness=2, circle_radius=2))

            # If recording, write the frame to the output video file
            if output_video:
                output_video.write(image)

            ret, buffer = cv2.imencode('.jpg', image)
            frame = buffer.tobytes()
            yield (b'--frame\r\n'
                   b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')

    # Release the video capture when finished
    if output_video:
        output_video.release()

@app.route('/video_feed')
def video_feed():
    return Response(generate_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')

@app.route('/start_recording')
def start_recording():
    global output_video
    if not output_video:
        output_video = cv2.VideoWriter(output_video_path, fourcc, 20.0, (640, 480))  # Start recording
    return "Recording started."

@app.route('/stop_recording')
def stop_recording():
    global output_video
    if output_video:
        output_video.release()  # Stop recording
        output_video = None
    return "Recording stopped."

@app.route('/public_video')
def public_video():
    # Serve the saved video from the public folder
    return send_from_directory(public_folder_path, 'output_video.mp4')

@app.route("/leaderboard", methods=["GET"])
def get_leaderboard():
    """Fetch the current leaderboard."""
    return jsonify(leaderboard)

@app.route("/leaderboard/add", methods=["POST"])
def add_to_leaderboard():
    """Add a new user entry to the leaderboard."""
    new_entry = request.json

    # Ensure required fields are present
    required_fields = {"username", "pfp", "score", "location", "postTime", "postMedia"}
    if not required_fields.issubset(new_entry.keys()):
        return jsonify({"error": "Missing required fields"}), 400

    # Check if user already exists
    for entry in leaderboard:
        if entry["username"] == new_entry["username"]:
            return jsonify({"error": "User already exists"}), 400

    # Add new entry to leaderboard
    leaderboard.append(new_entry)

    return jsonify({"message": "User added successfully", "leaderboard": leaderboard})

if __name__ == '__main__':
    socketio.run(app, debug=True, port=5001)

