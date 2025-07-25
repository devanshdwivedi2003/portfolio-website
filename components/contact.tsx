"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "devansh.dwivedi69@gmailcom",
    link: "mailto:devansh.dwivedi69@gmailcom",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 7307965635",
    link: "tel:+917307965635",
   
  },
  {
    icon: MapPin,
    title: "Location",
    value: "New Delhi, India",
    link: "#",
  },
]

export default function Contact() {
  return (
    <div className="space-y-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h2 className="text-3xl font-bold mb-8">Contact</h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-2xl font-semibold mb-6">Get in touch</h3>
            <p className="text-gray-400 mb-8">
              I'm always interested in hearing about new projects and opportunities. Whether you're a company looking to
              hire, or you're someone looking to build something, I'd love to hear from you.
            </p>
          </div>

          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                  <info.icon className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">{info.title}</h4>
                  <a href={info.link} className="text-gray-400 hover:text-yellow-400 transition-colors">
                    {info.value}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                  First Name
                </label>
                <Input
                  id="firstName"
                  type="text"
                  className="bg-gray-800 border-gray-700 focus:border-yellow-400"
                  placeholder="Your first name"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                  Last Name
                </label>
                <Input
                  id="lastName"
                  type="text"
                  className="bg-gray-800 border-gray-700 focus:border-yellow-400"
                  placeholder="Your last name"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <Input
                id="email"
                type="email"
                className="bg-gray-800 border-gray-700 focus:border-yellow-400"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Subject
              </label>
              <Input
                id="subject"
                type="text"
                className="bg-gray-800 border-gray-700 focus:border-yellow-400"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <Textarea
                id="message"
                rows={6}
                className="bg-gray-800 border-gray-700 focus:border-yellow-400 resize-none"
                placeholder="Tell me more about your project..."
              />
            </div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button className="w-full bg-yellow-400 text-gray-900 hover:bg-yellow-500">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </div>
  )
}
