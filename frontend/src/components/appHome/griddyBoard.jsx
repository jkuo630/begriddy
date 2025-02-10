import { useState, useEffect } from "react";
import Header from "./header";
import { motion } from "framer-motion";

function GriddyBoard() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchLeaderboard = async () => {
            try {
                const response = await fetch("http://localhost:5002/leaderboard");
                if (response.ok) {
                    const data = await response.json();
                    setData(data);
                } else {
                    console.error("Failed to fetch leaderboard data");
                }
            } catch (error) {
                console.error("Error fetching leaderboard data:", error);
            }
        };

        fetchLeaderboard();
    }, []);

    return (
        <div
            className="flex flex-col overflow-y-auto min-h-screen items-center justify-center bg-contain bg-fixed bg-center bg-gray-900 px-5 py-[80px]"
            style={{ backgroundImage: "url('/background.png')" }}
        >
            <Header />
            <div className="bg-white p-5 rounded-lg shadow-md w-full mx-auto">
                {/* Title */}
                <div className="flex flex-col items-center justify-center text-center">
                    <img src="/griddy.gif" alt="gwiddy GIF" className="w-24 h-24" />
                    <h2 className="text-2xl font-bold text-center mb-3"> GriddyBoard </h2>
                    <p className="text-gray-800 text-sm mb-4 mx-8">
                        February 9th, 2025
                    </p>
                </div>
                {/* Leaderboard Rows */}
                <div className="space-y-2">
                    {data
                        .sort((a, b) => b.score - a.score) // Sort by highest score
                        .map((user, index) => (
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.2, duration: 0.8 }}
                                key={user.username}
                                className="flex items-center p-2 rounded-lg bg-gray-100"
                            >
                                {/* Rank Number */}
                                <span className="text-lg font-bold w-6 text-gray-700">
                                    {index + 1}.
                                </span>

                                {/* Profile Picture */}
                                <img
                                    src={user.pfp}
                                    alt="Profile"
                                    className="w-10 h-10 rounded-full"
                                />

                                {/* Username & Score */}
                                <div className="ml-3 flex-1">
                                    <span className="font-bold text-sm">{user.username}</span>
                                </div>

                                {/* Score */}
                                <span className="text-gray-700 font-medium">{user.score}</span>
                            </motion.div>
                        ))}
                </div>
            </div>
            {/* <h1 className="text-2xl text-white font-bold text-center my-6"> Congrats! You really hit that Griddy today. </h1> */}

        </div>
    );
}

// const data = [
//     {
//         pfp: "/pfps/jason.jpg",
//         username: "jkuo630",
//         score: 1200,
//     },
//     {
//         pfp: "/pfps/jay.png",
//         username: "therealjaypark",
//         score: 980,
//     },
//     {
//         pfp: "/pfps/joanna.png",
//         username: "leejoannx",
//         score: 1120,
//     },
//     {
//         pfp: "/pfps/henry.png",
//         username: "henryleung1",
//         score: 890,
//     },
//     {
//         pfp: "/pfps/pauline.png",
//         username: "paulineongchan",
//         score: 1030,
//     },
//     {
//         pfp: "/pfps/kevin.png",
//         username: "kxiao33",
//         score: 950,
//     },
// ];

export default GriddyBoard;