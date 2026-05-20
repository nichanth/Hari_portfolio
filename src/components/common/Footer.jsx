import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative py-10 px-6 md:px-20 border-t border-white/10 overflow-hidden">
      
      {/* glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-cyan-500/10 blur-3xl"></div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div>
          <h2 className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
            SHRI HARI PRASATH
          </h2>

          <p className="text-slate-400 mt-2">
            Backend Engineer • Node.js • Cloud • AI
          </p>
        </div>

        <div className="flex gap-6 text-slate-400">
          <a
            href="https://github.com/"
            target="_blank"
            className="hover:text-cyan-400 transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            className="hover:text-cyan-400 transition"
          >
            LinkedIn
          </a>

          <a
            href="mailto:shrihariprasath.bs@gmail.com"
            className="hover:text-cyan-400 transition"
          >
            Email
          </a>
        </div>
      </motion.div>
    </footer>
  );
}