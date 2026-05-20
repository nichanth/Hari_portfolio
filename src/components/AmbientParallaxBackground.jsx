import { motion, useScroll, useTransform } from "framer-motion";

export default function AmbientParallaxBackground() {
  const { scrollY } = useScroll();

  // Asymmetric translation speeds for depth simulation
  const slowLayer = useTransform(scrollY, (value) => value * -0.12);
  const fastLayer = useTransform(scrollY, (value) => value * -0.28);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Slow, broad background glow node */}
      <motion.div 
        style={{ y: slowLayer }}
        className="absolute top-[15%] right-[-5%] w-[500px] h-[500px] bg-blue-500/5 blur-[130px] rounded-full" 
      />
      
      {/* Faster, sharper accent node */}
      <motion.div 
        style={{ y: fastLayer }}
        className="absolute top-[45%] left-[10%] w-[350px] h-[350px] bg-cyan-500/10 blur-[100px] rounded-full" 
      />
    </div>
  );
}