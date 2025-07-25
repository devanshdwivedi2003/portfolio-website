"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";



const socialLinks = {
  linkedin: "https://www.linkedin.com/in/devansh-dwivedi-41588a202/",
  twitter: "https://x.com/devansh09758001",
  github: "https://github.com/devanshdwivedi2003",
};

const iconMap = {
  linkedin: <FaLinkedin size={20} />,
  twitter: <FaTwitter size={20} />,
  github: <FaGithub size={20} />,
};

export default function Sidebar() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 rounded-2xl p-6 sticky top-8"
    >
      {/* Profile Image */}
      <div className="text-center mb-6">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="w-32 h-32 mx-auto mb-4 rounded-2xl overflow-hidden bg-gradient-to-br from-yellow-400 to-orange-500"
        >
          <img
            src="Profile.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <h1 className="text-2xl font-bold mb-2">Devansh Dwivedi</h1>
        <p className="text-yellow-400 bg-gray-700 px-3 py-1 rounded-lg text-sm inline-block">
          Full Web Developer
        </p>
      </div>

      {/* Contact Info */}
      <div className="space-y-4 mb-6">
        <div className="flex items-center gap-3 text-sm">
          <Mail className="w-4 h-4 text-yellow-400" />
          <span>devansh.dwivedi69@gmailcom</span>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <Phone className="w-4 h-4 text-yellow-400" />
          <span>+91 7307965635</span>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <MapPin className="w-4 h-4 text-yellow-400" />
          <span>New delhi, India</span>
        </div>
      </div>

      {/* Social Links */}

      <div className="flex gap-3 mb-6">
        {Object.entries(socialLinks).map(([name, url]) => (
          <motion.a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-yellow-400 hover:text-gray-900 transition-colors"
          >
            {iconMap[name]}
          </motion.a>
        ))}
      </div>

      {/* Download CV Button */}
      <Button
        className="w-full bg-yellow-400 text-gray-900 hover:bg-yellow-500"
        onClick={() => {
          const link = document.createElement("a");
          link.href =
            "https://drive.google.com/uc?export=download&id=1m6bCgOFCxKEEUnGTT_pxQRs2HiALZuwf";
          link.download = "Your_Name_CV.pdf"; // Replace with your actual name
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }}
      >
        <Download className="w-4 h-4 mr-2" />
        Download Resume
      </Button>
    </motion.div>
  );
}
