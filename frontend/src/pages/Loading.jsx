import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Griddy from "./../assets/Griddy.gif";

const Loading = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const griddyCount = location.state?.griddyCount || 0; // Get the Griddy count from state

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/results", { state: { griddyCount } });
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate, griddyCount]);

  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-fixed bg-contain bg-center bg-gray-900 text-white"
      style={{ backgroundImage: "url('/background.png')" }}
    >
      <img
        src={Griddy}
        alt="Griddy Dance"
        className="w-48 h-48 object-contain"
      />
      <h1 className="text-3xl font-bold text-white animate-pulse">BeGriddy.</h1>
    </div>
  );
};

export default Loading;
