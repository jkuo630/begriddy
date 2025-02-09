import React, { useEffect, useRef, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000"); // Connect to Flask backend

function App() {
  const videoRef = useRef(null);
  const [counter, setCounter] = useState(0);
  const [showCamera, setShowCamera] = useState(false); 

  useEffect(() => {
    if (showCamera && videoRef.current) {
      // Set up the video feed only if the camera is enabled
      videoRef.current.src = "http://localhost:5000/video_feed";
    }

    // Listen for counter updates from the backend
    socket.on("update_counter", (data) => {
      setCounter(data.counter);
    });

    // Clean up the socket connection
    return () => {
      socket.disconnect();
    };
  }, [showCamera]); // Re-run effect when `showCamera` changes

  const handleButtonClick = () => {
    setShowCamera(true); // Show the camera feed when the button is clicked
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">
        Pose Detection App
      </h1>
      {!showCamera && (
        <button
          onClick={handleButtonClick}
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        >
          Start Camera
        </button>
      )}
      {showCamera && (
        <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg overflow-hidden">
          <img ref={videoRef} alt="Video Feed" className="w-full h-auto" />
        </div>
      )}
      <h2 className="text-2xl font-semibold text-gray-800 mt-8">
        Reps: {counter}
      </h2>
    </div>
  );
}

export default App;
