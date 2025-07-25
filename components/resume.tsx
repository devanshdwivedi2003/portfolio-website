"use client"

import { motion } from "framer-motion"
import { GraduationCap, Briefcase } from "lucide-react"

const education = [
  {
    degree: "Bachelor of Technology",
    field: "Computer Science",
    period: "2022 — 2026",
    description:
      " I have completed my bachelor's degree in computer science from bhagwan parushram institute of technology, delhi with CGPA of 8.08 .",
  }
]


const skills = [
  { name: "React JS", level: 90 },
  { name: "Next JS", level: 80 },
  { name: "Node JS", level: 90 },
  { name: "Express JS", level: 80 },
  { name: "Typescript", level: 90 },
  { name: "PostgreSQL", level: 80 },
  { name: "MongoDB", level: 90 },
  { name: "DSA", level: 90 },
]

export default function Resume() {
  return (
    <div className="space-y-12">
      {/* Education Section */}
      <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <div className="flex items-center gap-3 mb-8">
          <GraduationCap className="w-8 h-8 text-yellow-400" />
          <h2 className="text-3xl font-bold">Education</h2>
        </div>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-gray-800 p-6 rounded-xl"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <span className="text-yellow-400 text-sm bg-gray-700 px-3 py-1 rounded-lg">{edu.period}</span>
              </div>
              <h4 className="text-gray-300 font-medium mb-3">{edu.field}</h4>
              <p className="text-gray-400 text-sm">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>



      {/* Skills Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="space-y-2"
            >
              <div className="flex justify-between items-center">
                <span className="font-medium">{skill.name}</span>
                <span className="text-yellow-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.5 + 0.1 * index }}
                  className="bg-yellow-400 h-2 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  )
}
