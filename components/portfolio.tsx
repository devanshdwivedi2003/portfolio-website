"use client"

import { motion } from "framer-motion"
import { ExternalLink, Eye } from "lucide-react"
import { useState } from "react"

const categories = ["All", "Full stack", "Frontend project"]

const projects = [
  {
    id: 1,
    title: "CityCruise ",
    category: "Full stack",
    image: "cityCruise.jpg",
    link: "https://city-cruise.vercel.app/", // Added https://
  },
  {
    id: 2,
    title: "Awwards video game ",
    category: "Frontend project",
    image: "awwards-video-game.jpg",
    link: "https://awwards-video-game.vercel.app", // Added https://
  },
  {
    id: 3,
    title: "Ochi project ",
    category: "Frontend project",
    image: "Ochi_logo.jpeg",
    link: "https://ochi-project-jade.vercel.app", // Added https://
  },
  {
    id: 4,
    title: "Obeys agency clone ",
    category: "Frontend project",
    image: "Obeys-agency-logo.png",
    link: "https://major-project-cyan.vercel.app", // Added https://
  },
];


export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <div className="space-y-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h2 className="text-3xl font-bold mb-8">Portfolio</h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-yellow-400 text-gray-900"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Projects Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, delay: 0.1 * index }}
            whileHover={{ y: -10 }}
            className="group bg-gray-800 rounded-xl overflow-hidden"
          >
            <div className="relative overflow-hidden">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center"
                  >
                    <Eye className="w-5 h-5" />
                  </motion.button>
                  <motion.a
                    href={project.link}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold mb-1">{project.title}</h3>
              <p className="text-yellow-400 text-sm">{project.category}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
