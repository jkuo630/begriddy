import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { motion } from "framer-motion";

function GriddyCard({ pfp, username, location, postTime, postMedia, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 1.2 }}
            className="w-full bg-transparent rounded-lg shadow-md overflow-hidden text-white mb-5">
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
                    <p className=" text-sm">{location}, {postTime}</p>
                </div>
            </div>

            {/* change this to be a video */}
            <img
                src={postMedia}
                alt="Post"
                className="w-full h-64 rounded-lg flex-shrink-0"
            />
        </motion.div>
    );
}

export default GriddyCard;
