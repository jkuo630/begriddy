import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import io from "socket.io-client";
import Navbar from "../components/griddy/navbar";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";

const socket = io("http://localhost:5001");

const Griddy = () => {
  const videoRef = useRef(null);
  const navigate = useNavigate();
  const [counter, setCounter] = useState(0);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [countdown, setCountdown] = useState(null);

  useEffect(() => {
    let countdownInterval;
    if (countdown > 0) {
      countdownInterval = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else if (countdown === 0) {
      setIsCameraOn(true);
      setCountdown(10); // Start the 10-second countdown
    }

    return () => clearInterval(countdownInterval);
  }, [countdown]);

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

  useEffect(() => {
    if (isCameraOn && countdown === 0) {
      // Stop recording when countdown finishes
      fetch("http://localhost:5001/stop_recording").then(() => {
        navigate("/loading", { state: { griddyCount: counter } });
        // Data to send for the leaderboard
        const leaderboardData = {
          pfp: "/pfps/marcus.png",
          username: "marcuskam01",
          score: counter, // Assuming the counter is the score
          location: "North Van",
          postTime: "1min ago",
          postMedia: "/output_video.mp4",
        };

        // POST request to add to leaderboard
        fetch("http://localhost:5001/leaderboard/add", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(leaderboardData),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("Leaderboard update response:", data);
          })
          .catch((error) => {
            console.error("Error posting to leaderboard:", error);
          });
      });
    }
  }, [countdown, isCameraOn, counter, navigate]);

  const startRecording = () => {
    fetch("http://localhost:5001/start_recording");
    setCountdown(3);
  };

  return (
    <div
      className="flex flex-col items-center justify-end h-screen bg-fixed bg-contain bg-center bg-gray-900 text-white"
      style={{ backgroundImage: "url('/background.png')" }}
    >
      <Navbar />

      <div className="absolute top-24 text-center z-10">
        <h1 className="text-3xl font-bold mb-4">Griddy Counter: {counter}</h1>
        <p className="text-xl">
          You have 10 seconds to do as many proper Griddys as possible.
        </p>
      </div>

      <div className="absolute bottom-16 flex flex-col items-center space-y-6">
        {countdown > 0 && (
          <div className="mb-4 text-3xl font-semibold text-white">
            {countdown}
          </div>
        )}

        {isCameraOn && (
          <div className="flex justify-center items-center w-full h-full mb-8">
            <div className="relative w-[320px] h-[480px] bg-[#C4C4C4] rounded-xl">
              <img
                ref={videoRef}
                className="w-full h-full object-cover rounded-xl"
                alt="Griddy Feed"
              />
            </div>
          </div>
        )}

        <div
          className="w-20 h-20 flex justify-center items-center bg-red-600 text-white rounded-full"
          onClick={startRecording}
        >
          <RadioButtonCheckedIcon style={{ fontSize: "50px" }} />
        </div>
      </div>
    </div>
  );
};

export default Griddy;
