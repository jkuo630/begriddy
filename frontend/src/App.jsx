import { Routes, Route } from 'react-router-dom'
import Waitlist from './pages/Waitlist'
import Home from './pages/Home'
import HomePage from './components/appHome/home'
import MainPage from './components/appHome/main'

export default function App() {
  return (
    <div className="bg-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/waitlist" element={<Waitlist />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </div>
  )
}