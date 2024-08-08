import { Canvas } from "@react-three/fiber";
import Experience from "./Experiences";
import "./style.css";

const PokerBG = () => {
  return (
    <div style={{ width: "100vw", height: "80vh" }} className="canvas-holder">
      <Canvas
        className="full-canvas"
        camera={{ fov: 25, position: [0, 0, 100] }}
      >
        <color attach="background" args={["#101010"]} />
        <Experience />
      </Canvas>
    </div>
  );
};

export default PokerBG;
