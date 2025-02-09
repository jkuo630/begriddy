import WaitlistHeader from '../components/waitlist/WaitlistHeader'
import WaitlistForm from '../components/waitlist/WaitlistForm'

export default function Waitlist() {
  return (
    <div className="relative isolate min-h-screen bg-white px-6 py-24 sm:py-32 lg:px-8">
      <WaitlistHeader />
      <WaitlistForm />
    </div>
  )
} 