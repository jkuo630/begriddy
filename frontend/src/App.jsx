import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Griddy from "./pages/Griddy";
import HomePage from "./components/appHome/home";
import MainPage from "./components/appHome/main";
import Results from "./pages/Results";
import Loading from "./pages/Loading";

export default function App() {
  return (
    <div className="bg-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/griddy" element={<Griddy />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/results" element={<Results />} />
        <Route path="/loading" element={<Loading />} />
      </Routes>
    </div>
  );
}
