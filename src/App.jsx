import Home from "./pages/Home";
import ParticlesBackground from "./components/common/ParticlesBackground";
import MouseGlow from "./components/common/MouseGlow";

function App() {
  return (
    <div className="relative bg-slate-950 text-white overflow-x-hidden">
      
      <ParticlesBackground />

      <MouseGlow />

      <div className="relative z-10">
        <Home />
      </div>
    </div>
  );
}

export default App;