import { Routes, Route } from 'react-router-dom'
import Waitlist from './pages/Waitlist'
import Home from './pages/Home'

export default function App() {
  return (
    <div className="bg-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/waitlist" element={<Waitlist />} />
      </Routes>
    </div>
  )
}