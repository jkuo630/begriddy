import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Header() {
  const navigate = useNavigate(); // Initialize the navigate function

  return (
    <header className="fixed top-0 left-0 w-full shadow-md bg-gray-900/50 backdrop-blur-md z-50 mb-10">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-gray-700 hover:text-blue-500 cursor-pointer">
          <PersonAddIcon className="text-2xl text-white" />
        </div>

        {/* Make BeGriddy title clickable */}
        <h1
          className="text-2xl font-bold text-white cursor-pointer"
          onClick={() => navigate("/main")} // Navigate to /main when clicked
        >
          BeGriddy.
        </h1>

        <div className="flex items-center space-x-4">
          <div className="text-gray-700 hover:text-blue-500 cursor-pointer">
            <CalendarMonthIcon className="text-2xl text-white" />
          </div>
          <AccountCircleIcon className="text-white text-3xl" />
        </div>
      </div>
    </header>
  );
}

export default Header;
