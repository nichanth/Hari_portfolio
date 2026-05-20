import Navbar from "../components/common/Navbar";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Skills from "../components/skills/Skills";
import Experience from "../components/experience/Experience";
import Projects from "../components/projects/Projects";
import Contact from "../components/contact/Contact";
import Education from "../components/education/Education";
import Achievements from "../components/achivements/Achievements";
import Interests from "../components/interests/Interests";
import Footer from "../components/common/Footer";

export default function Home() {
  return (
   <div className="bg-slate-950 text-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Achievements />
      <Projects />
      <Interests /> {/* Placed seamlessly into section hierarchy */}
      <Contact />
      <Footer />
    </div>
  );
}