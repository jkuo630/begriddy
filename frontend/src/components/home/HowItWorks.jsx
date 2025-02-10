import { BellIcon, VideoCameraIcon, ShareIcon } from '@heroicons/react/20/solid'
import { motion } from 'framer-motion'
import ScrollAnimation from '../common/ScrollAnimation'
import HowItWorksImg from '../../assets/HowItWorks.png';

const features = [
  {
    name: 'Get the Ping.',
    description:
      'You’ll never know when it’s coming.',
    icon: BellIcon,
  },
  {
    name: 'Hit the Griddy.',
    description: 'You’ve got 2 minutes to show off your moves.',
    icon: VideoCameraIcon,
  },
  {
    name: 'Post & Roast.',
    description: 'Your friends see it all—no re-dos, no filters.',
    icon: ShareIcon,
  },
]

export default function HowItWorks() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <ScrollAnimation>
                <h2 className="text-base/7 font-semibold text-indigo-600">
                  Griddy all day, every day
                </h2>
                <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  How It Works
                </p>
                <p className="mt-6 text-lg/8 text-gray-600">
                Forget perfect posts. BeGriddy is about real, spontaneous fun. Because life’s better when you’re dancing through it.
                </p>
              </ScrollAnimation>
              
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                {features.map((feature, index) => (
                  <ScrollAnimation key={feature.name} delay={index * 0.2}>
                    <motion.div 
                      className="relative pl-9"
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <dt className="inline font-semibold text-gray-900">
                        <feature.icon aria-hidden="true" className="absolute left-1 top-1 size-5 text-indigo-600" />
                        {feature.name}
                      </dt>{' '}
                      <dd className="inline">{feature.description}</dd>
                    </motion.div>
                  </ScrollAnimation>
                ))}
              </dl>
            </div>
          </div>
          
          <ScrollAnimation delay={0.4}>
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.img
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, type: "spring" }}
                viewport={{ once: true }}
                alt="Product screenshot"
                src={HowItWorksImg}
                width={2432}
                height={1442}
                className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[40rem] md:-ml-4 lg:-ml-0"
              />
            </motion.div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  )
}
