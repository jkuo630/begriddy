import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/results/navbar";

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const griddyCount = location.state?.griddyCount || 0; // Get the Griddy count

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <Navbar />

      <video
        className="w-full h-[70%] object-cover"
        autoPlay={true}
        muted
        loop
        playsInline
      >
        <source src="/output_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* View GriddyBoard Button */}
      <button
        onClick={() => navigate("/griddyboard")}
        className="absolute bottom-10 bg-white text-black text-lg font-bold py-3 px-6 rounded-full hover:bg-gray-200 transition"
      >
        View GriddyBoard
      </button>

      {/* Griddy Score */}
      <h1 className="text-4xl font-bold">Your GriddyScore:</h1>
      <p className="text-5xl font-semibold">{griddyCount}</p>
    </div>
  );
};

export default Results;
