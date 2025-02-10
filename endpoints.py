from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

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

@app.route("/leaderboard", methods=["GET"])
def get_leaderboard():
    """Fetch the current leaderboard."""
    print("DOING THIS")
    response = jsonify(leaderboard)
    response.headers["Content-Type"] = "application/json"
    return response

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
    app.run(debug=True, port=5002)