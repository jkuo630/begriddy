import { useRef } from "react";
import { motion } from "framer-motion";

function VideoBox() {
    const videoRef = useRef(null);
    const pausedTime = 3.2; // The time to pause the video (in seconds)

    const handleMouseEnter = () => {
        if (videoRef.current) {
            videoRef.current.play(); // Play the video on hover
        }
    };

    const handleMouseLeave = () => {
        if (videoRef.current) {
            videoRef.current.pause(); // Pause the video on hover end
            videoRef.current.currentTime = pausedTime; // Reset to the original paused time
        }
    };

    return (
        <div
            className="relative w-full max-w-md h-[200px] text-center rounded-xl overflow-hidden shadow-lg mb-4"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Background Video */}
            <motion.video
                ref={videoRef}
                className="absolute w-full h-full object-cover"
                autoPlay={false}
                muted
                loop
                playsInline
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.3 }}
                transition={{ duration: 0.3 }}
            >
                <source src="/jason.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </motion.video>

            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
                {/* Title */}
                <h1 className="text-white text-3xl font-bold italic text-center">
                    LEARN THE
                </h1>
                <h1 className="text-white text-3xl font-bold italic text-center mb-4">
                    Optimal Griddy
                </h1>

                {/* Button */}
                <button className="bg-white text-black px-6 py-2 rounded-xl hover:bg-gray-200 transition-colors">
                    Learn More
                </button>
            </div>
        </div>
    );
}

export default VideoBox;