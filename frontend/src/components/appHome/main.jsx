import Header from "./header";
import GriddyCard from "./griddyCard";

// TODOS:
// - ADD VIDEOS IN
// - add optimal griddy sections
// - add griddyboard

function MainPage() {
    const placeholderPfp = "https://as1.ftcdn.net/v2/jpg/06/95/65/86/1000_F_695658623_qQOKTAa5f0NJ9QIvwDoImSiYGQvRbltI.jpg"
    return (
        <div
            className="flex flex-col overflow-y-auto items-center bg-contain bg-fixed bg-center bg-gray-900 px-10 py-[80px]"
            style={{ backgroundImage: "url('/background.png')" }}
        >
            <Header />
            {data.map((item, index) => (
                <GriddyCard
                    key={index}
                    index={index} 
                    pfp={placeholderPfp}
                    username={item.username}
                    location={item.location}
                    postTime={item.postTime}
                    postMedia={placeholderPfp}
                />
            ))}
        </div>
    );
}

const data = [
    {
        pfp: "https://via.placeholder.com/40",
        username: "user1",
        location: "UBC",
        postTime: "2hr ago",
        postMedia: "https://via.placeholder.com/400x400", // Same media for all
    },
    {
        pfp: "https://via.placeholder.com/40",
        username: "user2",
        location: "SFU",
        postTime: "3hr ago",
        postMedia: "https://via.placeholder.com/400x400", // Same media for all
    },
    {
        pfp: "https://via.placeholder.com/40",
        username: "user3",
        location: "Vancouver",
        postTime: "4hr ago",
        postMedia: "https://via.placeholder.com/400x400", // Same media for all
    },
    {
        pfp: "https://via.placeholder.com/40",
        username: "user4",
        location: "Burnaby",
        postTime: "5hr ago",
        postMedia: "https://via.placeholder.com/400x400", // Same media for all
    },
];

export default MainPage;