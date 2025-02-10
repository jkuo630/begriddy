import { VideoCameraIcon, ViewfinderCircleIcon, ArrowPathIcon, PlusCircleIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Real-Time Pose Detection',
    description:
      'Captures live video from your webcam and uses MediaPipe to detect and track body movements.',
    icon: ViewfinderCircleIcon,
  },
  {
    name: 'Motion Tracking & Counting',
    description:
      'Calculates joint angles to identify movements and updates a counter when motions are completed.',
    icon: PlusCircleIcon,
  },
  {
    name: 'Live Video Streaming',
    description:
      'Streams the processed video feed to the frontend for real-time visual feedback.',
    icon: VideoCameraIcon,
  },
  {
    name: 'Instant Updates via WebSockets',
    description:
      'Sends real-time counter updates to connected clients using Flask-SocketIO.',
    icon: ArrowPathIcon,
  },
]

export default function FAQ() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
            The Mechanics
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon aria-hidden="true" className="size-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
