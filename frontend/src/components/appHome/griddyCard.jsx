import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { motion } from "framer-motion";
import { useState } from "react";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

function GriddyCard({ pfp, username, location, postTime, postMedia, index }) {
    const [hasPosted, setHasPosted] = useState(false); // State to track if the user has posted

    const handlePostGriddy = () => {
        setHasPosted(true); // Simulate posting your Griddy
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 1.2 }}
            className="w-full bg-transparent rounded-lg shadow-md overflow-hidden text-white mb-5"
        >
            <div className="flex items-center p-4">
                <img
                    src={pfp}
                    alt="Profile"
                    className="w-10 h-10 rounded-full"
                />

                <div className="ml-3 flex-1">
                    <div className="flex items-center justify-between">
                        <span className="font-bold text-sm">{username}</span>
                        <MoreHorizIcon className='text-white h-10 w-10' />
                    </div>
                    <p className="text-sm">{location}, {postTime}</p>
                </div>
            </div>

            {/* Video Media */}
            <div className="relative w-full h-80 overflow-hidden"> {/* Container for the video */}
                {/* Blur Overlay (Conditional) */}
                {!hasPosted && (
                    <div className="absolute inset-0 -m-1 flex flex-col items-center justify-center bg-gray-800 bg-opacity-70 backdrop-blur-md z-10 text-center">
                        <VisibilityOffIcon className='text-white text-xl' />
                        <p className="text-white text-lg font-bold mb-4">
                            Griddy to View
                        </p>
                        <p className="text-white text-sm mb-4 mx-8">
                            To view your friends’ BeGriddy, share yours with them.
                        </p>
                        <button
                            onClick={handlePostGriddy}
                            className="bg-white text-sm text-black px-2 py-1 rounded-xl hover:bg-blue-600 transition-colors"
                        >
                            <CameraAltIcon className='text-black mr-2' />
                            Post a BeGriddy.
                        </button>
                    </div>

                )}
                <motion.video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src={postMedia} type="video/mp4" />
                    Your browser does not support the video tag.
                </motion.video>
            </div>
        </motion.div>
    );
}

export default GriddyCard;