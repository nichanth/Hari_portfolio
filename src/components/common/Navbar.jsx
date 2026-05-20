import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  "About",
  "Skills",
  "Experience",
  "Projects",
  "Contact",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-slate-950/70 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <div>
          <h1 className="text-2xl md:text-3xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
            SHRI HARI PRASATH
          </h1>

          <p className="text-[10px] md:text-xs text-slate-400 tracking-[4px] uppercase">
            AUTOSAR ARCHITECT
          </p>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-white hover:text-cyan-400 transition"
            >
              {link}
            </a>
          ))}
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1"
        >
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-6 h-[2px] bg-white"></span>
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            className="md:hidden bg-slate-950/95 backdrop-blur-xl border-t border-white/10"
          >
            <div className="flex flex-col px-6 py-6 gap-6">
              {links.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="text-white text-lg hover:text-cyan-400 transition"
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}