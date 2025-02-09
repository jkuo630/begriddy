import { motion } from 'framer-motion'
import ScrollAnimation from './ScrollAnimation'
import uoftLogo from '../../assets/UofT.png'
import waterlooLogo from '../../assets/Waterloo.png'
import westernLogo from '../../assets/Western.png'
import ubcLogo from '../../assets/UBC.png'

export default function LogoClouds() {
  const logos = [
    { src: uoftLogo, alt: "University of Toronto" },
    { src: waterlooLogo, alt: "University of Waterloo" },
    { src: westernLogo, alt: "Western University" },
    { src: ubcLogo, alt: "University of British Columbia" },
  ]

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollAnimation>
          <h2 className="text-center text-lg/8 font-semibold text-gray-900">
            Trusted by Canada's Top Universities
          </h2>
        </ScrollAnimation>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {logos.map((logo, index) => (
            <ScrollAnimation key={logo.alt} delay={index * 0.2}>
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                alt={logo.alt}
                src={logo.src}
                width={158}
                height={48}
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              />
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </div>
  )
}
  