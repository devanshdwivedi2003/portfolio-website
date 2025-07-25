"use client"

import { motion } from "framer-motion"
import { Code, Palette, Smartphone, Database } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Frontend  Web Development",
    description: "Enthusiastic Frontend Developer with a passion for creating seamless and visually appealing user experiences. Proficient in HTML, CSS, and JavaScript with hands-on project experience in React and responsive design.",
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Motivated Backend Developer with strong foundational knowledge in Node JS, Express JS and database management. Experienced in building RESTful APIs . Recent computer science graduate with hands-on project experience in developing scalable server-side applications.",
  },
]


export default function About() {
  return (
    <div className="space-y-12">
      {/* About Section */}
      <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
       
        <p className="text-gray-300 leading-relaxed">
         I'm Full stack developer from Delhi, India, with a focus on building robust, scalable web applications using both front-end and back-end technologies. Proficient in Node.js, Typescript and asynchronous JavaScript, with a strong command of API development and integration. Skilled in modern web frameworks like Next.js for frontend and server-side rendering, and experienced with ORM solutions such as Prisma for efficient database operations. Actively expanding expertise in SQL and PostgreSQL, including hands-on experience with database migrations and data modeling.
        </p>
      </motion.section>

      {/* What I'm Doing Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h3 className="text-2xl font-bold mb-8">What I'm doing</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
              className="bg-gray-800 p-6 rounded-xl"
            >
              <service.icon className="w-10 h-10 text-yellow-400 mb-4" />
              <h4 className="text-xl font-semibold mb-3">{service.title}</h4>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      
    </div>
  )
}
