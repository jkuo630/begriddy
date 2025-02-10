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
      setCountdown(10); // Start the 5-second countdown
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
      navigate("/loading", { state: { griddyCount: counter } });
    }
  }, [countdown, isCameraOn, counter, navigate]);

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
                alt="Live Feed"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        )}

        {countdown === null && !isCameraOn && (
          <RadioButtonCheckedIcon
            onClick={() => setCountdown(3)}
            className="cursor-pointer text-red-500"
            style={{ fontSize: 70 }}
          />
        )}
      </div>
    </div>
  );
};

export default Griddy;
