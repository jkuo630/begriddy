import React, { useEffect, useRef, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5001"); // Ensure it matches the backend port

const Griddy = () => {
  const videoRef = useRef(null);
  const [counter, setCounter] = useState(0);
  const [isCameraOn, setIsCameraOn] = useState(false);

  useEffect(() => {
    if (isCameraOn && videoRef.current) {
      videoRef.current.src = "http://localhost:5001/video_feed";
    }

    socket.on("update_counter", (data) => {
      setCounter(data.counter);
    });

    return () => {
      socket.off("update_counter");
    };
  }, [isCameraOn]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-4">Griddy Counter: {counter}</h1>
      <button
        onClick={() => setIsCameraOn(true)}
        className="px-6 py-2 mb-4 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition"
        disabled={isCameraOn}
      >
        {isCameraOn ? "Camera On" : "Start Camera"}
      </button>
      {isCameraOn && (
        <img
          ref={videoRef}
          alt="Live Feed"
          className="border-4 border-blue-400 rounded-lg shadow-lg w-[640px] h-[480px]"
        />
      )}
    </div>
  );
};

export default Griddy;
