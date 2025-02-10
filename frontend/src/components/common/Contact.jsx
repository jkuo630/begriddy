import { motion } from "framer-motion";
import ScrollAnimation from "./ScrollAnimation";
import jasonHeadshot from "../../assets/Jason.jpg";
import lucasHeadshot from "../../assets/Lucas.jpg";
import marcusHeadshot from "../../assets/Marcus.png";
import michelleHeadshot from "../../assets/Michelle.jpg";

const people = [
  {
    name: "Marcus Kam",
    role: "Co-Founder",
    description: "3rd Year BUCS @ UBC",
    imageUrl: marcusHeadshot,
  },
  {
    name: "Jason Kuo",
    role: "Co-Founder",
    description: "3rd Year BUCS @ UBC",
    imageUrl: jasonHeadshot,
  },

  {
    name: "Lucas Gingera",
    role: "Co-Founder",
    description: "2rd Year BUCS @ UBC",
    imageUrl: lucasHeadshot,
  },

  {
    name: "Michelle Wan",
    role: "Co-Founder",
    description: "3rd Year BUCS @ UBC",
    imageUrl: michelleHeadshot,
  },
];

export default function Contact() {
  return (
    <div className="bg-white py-24 sm:py-32" id="team">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollAnimation>
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
              Meet Our Leadership
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600">
              Leading the Charge, One Griddy at a Time. 
            </p>
          </div>
        </ScrollAnimation>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:mx-0 lg:max-w-none">
          {people.map((person, index) => (
            <ScrollAnimation key={person.name} delay={index * 0.2}>
              <motion.li
                className="flex items-center gap-x-8"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  src={person.imageUrl}
                  alt=""
                  className="size-20 rounded-full bg-gray-100"
                />
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-base/7 font-medium text-indigo-600">
                    {person.role}
                  </p>
                  <p className="mt-2 text-sm/6 text-gray-600">
                    {person.description}
                  </p>
                </div>
              </motion.li>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </div>
  );
}
