import { Routes, Route } from "react-router-dom";
import Waitlist from "./pages/Waitlist";
import Home from "./pages/Home";
import Griddy from "./pages/Griddy";

export default function App() {
  return (
    <div className="bg-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/waitlist" element={<Waitlist />} />
        <Route path="/griddy" element={<Griddy />} />
      </Routes>
    </div>
  );
}
