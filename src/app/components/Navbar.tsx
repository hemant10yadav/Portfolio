import { motion } from "framer-motion";
import { useState } from "react";

export const NavBar = () => {
  const [activeSection, setActiveSection] = useState("about");
  
  return (
    <nav className="fixed top-0 w-full bg-black/50 backdrop-blur-lg z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
          >
            HSY
          </motion.div>
          <div className="flex gap-8">
            {["about", "skills", "projects"].map((item) => (
              <motion.a
                key={item}
                href={`#${item}`}
                className={`capitalize ${
                  activeSection === item ? "text-purple-400" : "text-gray-400"
                } hover:text-purple-400 transition-colors`}
                onClick={() => setActiveSection(item)}
                whileHover={{ scale: 1.05 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
