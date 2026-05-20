import { motion } from "framer-motion";

export default function ParticlesBackground() {
  const particles = Array.from({ length: 20 });

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {particles.map((_, index) => (
        <motion.div
          key={index}
          animate={{
            y: [0, -80, 0],
            x: [0, 40, 0],
          }}
          transition={{
            duration: 8 + index,
            repeat: Infinity,
          }}
          className="absolute w-2 h-2 bg-cyan-400/20 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
}