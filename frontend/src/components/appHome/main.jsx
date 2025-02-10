import Header from "./header";
import GriddyCard from "./griddyCard";
import VideoBox from "./optimalGriddy";
import { useState, useEffect } from "react";

function MainPage() {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Fetch leaderboard data from the backend
        const fetchLeaderboard = async () => {
            try {
                const response = await fetch("/leaderboard");
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
      className="flex flex-col overflow-y-auto items-center bg-contain bg-fixed bg-center bg-gray-900 px-10 py-[80px]"
      style={{ backgroundImage: "url('/background.png')" }}
    >
      <Header />
      <VideoBox />
      {data.map((item, index) => (
        <GriddyCard
          key={index}
          index={index}
          pfp={item.pfp}
          username={item.username}
          location={item.location}
          postTime={item.postTime}
          postMedia={item.postMedia}
        />
      ))}
    </div>
  );
}

// const data = [
//   {
//     pfp: "/pfps/jason.jpg",
//     username: "jkuo630",
//     location: "UBC",
//     postTime: "2hr ago",
//     postMedia: "/output_video.mp4", // Same media for all
//   },
//   {
//     pfp: "/pfps/jason.jpg",
//     username: "jkuo630",
//     location: "UBC",
//     postTime: "2hr ago",
//     postMedia: "/jason.mp4", // Same media for all
//   },
//   {
//     pfp: "/pfps/jay.png",
//     username: "therealjaypark",
//     location: "SFU",
//     postTime: "3hr ago",
//     postMedia: "/jay.mp4", // Same media for all
//   },
//   {
//     pfp: "/pfps/joanna.png",
//     username: "leejoannx",
//     location: "Vancouver",
//     postTime: "4hr ago",
//     postMedia: "/joanna.mp4", // Same media for all
//   },
//   {
//     pfp: "/pfps/henry.png",
//     username: "henryleung1",
//     location: "Burnaby",
//     postTime: "5hr ago",
//     postMedia: "/henry.mp4", // Same media for all
//   },
//   {
//     pfp: "/pfps/pauline.png",
//     username: "paulineongchan",
//     location: "Burnaby",
//     postTime: "5hr ago",
//     postMedia: "/pauline.mp4", // Same media for all
//   },
//   {
//     pfp: "/pfps/kevin.png",
//     username: "kxiao33",
//     location: "Burnaby",
//     postTime: "5hr ago",
//     postMedia: "/kevin.mp4", // Same media for all
//   },
// ];

export default MainPage;
