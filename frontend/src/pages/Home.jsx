import { motion } from 'framer-motion'
import Nav from '../components/common/Nav'
import Hero from '../components/home/Hero'
import HowItWorks from '../components/home/HowItWorks'
import Stats from '../components/home/Stats'
import LogoClouds from  '../components/common/LogoClouds'
import FAQ from '../components/home/FAQ'
import Island from '../components/home/Island'
import Contact from '../components/common/Contact'

export default function App() {
  return (
    <div className="bg-white">
      <Nav />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <div id="how-it-works">
          <HowItWorks />
        </div>
        <Stats />
        <div id="faq">
          <FAQ />
        </div>
        <Island />
        <div id="contact">
        <Contact />
        </div>
        <LogoClouds />
      </motion.div>
    </div>
  )
}
