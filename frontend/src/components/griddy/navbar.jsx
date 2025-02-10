import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Header() {
  const navigate = useNavigate(); // Initialize the navigate function

  return (
    <header className="fixed top-0 left-0 w-full shadow-md bg-gray-900/50 backdrop-blur-md z-50 mb-10 flex justify-center items-center h-16">
      <KeyboardArrowDownIcon className="absolute left-4 text-white" />

      {/* Make BeGriddy title clickable */}
      <h1
        className="text-2xl font-bold text-white cursor-pointer"
        onClick={() => navigate("/main")} // Navigate to /main when clicked
      >
        BeGriddy.
      </h1>
    </header>
  );
}

export default Header;
