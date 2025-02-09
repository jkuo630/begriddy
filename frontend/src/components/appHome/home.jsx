import { motion } from "framer-motion";
import LoginCard from "./loginCard";

function HomePage() {
    return (
        <div
            className="flex flex-col items-center justify-center h-screen bg-fixed bg-contain bg-center bg-gray-900"
            style={{ backgroundImage: "url('/background.png')" }}
        >
            <img src="/griddy.gif" alt="gwiddy GIF" className="w-32 h-32" />
            <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
            >
                <h1 className="text-white font-bold text-3xl text-center">BeGriddy.</h1>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0 }}
            >
                <LoginCard />
            </motion.div>
        </div>
    );
}

export default HomePage;