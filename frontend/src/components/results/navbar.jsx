import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import IosShareIcon from "@mui/icons-material/IosShare";

function Navbar() {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 w-full shadow-md bg-gray-900/50 backdrop-blur-md z-50 flex justify-between items-center px-4 h-16">
      <KeyboardArrowDownIcon
        className="text-white cursor-pointer"
        fontSize="large"
      />

      <h1
        className="text-2xl font-bold text-white cursor-pointer"
        onClick={() => navigate("/main")}
      >
        BeGriddy.
      </h1>

      <div className="flex space-x-4">
        <IosShareIcon
          className="text-white cursor-pointer"
          fontSize="text-2xl"
        />
        <MoreHorizIcon
          className="text-white cursor-pointer"
          fontSize="text-2xl"
        />
      </div>
    </header>
  );
}

export default Navbar;
