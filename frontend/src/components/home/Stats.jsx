import ScrollAnimation from '../common/ScrollAnimation'
import { motion } from 'framer-motion'

const stats = [
    { id: 1, name: '- Satisfied BeGriddy User', value: '"BeGriddy cured my depression!"'},
    { id: 2, name: '- Jonathan Grey (BUCS Chair)', value: '"The greatest innovation since OpenAI"' },
    { id: 3, name: '- Jay Park (Now Deceased)', value: '"Isn\'t this just a BeReal rip off, but Griddys?"' },
  ]
  
  export default function Stats() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat, index) => (
              <ScrollAnimation key={stat.id} delay={index * 0.2}>
                <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                  <motion.dt 
                    className="text-base/7 text-gray-600"
                    whileHover={{ scale: 1.05 }}
                  >
                    {stat.name}
                  </motion.dt>
                  <motion.dd 
                    className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl"
                    whileHover={{ scale: 1.05 }}
                  >
                    {stat.value}
                  </motion.dd>
                </div>
              </ScrollAnimation>
            ))}
          </dl>
        </div>
      </div>
    )
  }
  