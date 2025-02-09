import { motion } from 'framer-motion'

export default function WaitlistHeader() {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Join our Waitlist</h2>
        <p className="mt-4 text-lg text-gray-600">
          Be among the first to experience our revolutionary student housing platform.
        </p>
      </motion.div>
    </div>
  )
} 