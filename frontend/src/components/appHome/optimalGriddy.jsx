
function VideoBox() {
    return (
        <div className="relative w-full max-w-md h-[300px] rounded-lg overflow-hidden shadow-lg">
            {/* Background Video */}
            <video
                className="absolute w-full h-full object-cover"
                autoPlay={false}
                muted
                loop
                playsInline
            >
                <source src="/background-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
                {/* Title */}
                <h1 className="text-white text-3xl font-bold text-center mb-4">
                    Learn the Optimal Griddy
                </h1>

                {/* Button */}
                <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors">
                    Learn More
                </button>
            </div>
        </div>
    );
}

export default VideoBox;