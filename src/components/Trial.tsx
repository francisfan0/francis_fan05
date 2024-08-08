import { Torus } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics, RigidBody, CuboidCollider } from "@react-three/rapier";
import { Suspense } from "react";
import "./style.css";

const Trial = () => {
  return (
    <div style={{ width: "100vw", height: "80vh" }} className="canvas-holder">
      <Canvas>
        <Suspense>
          <Physics debug>
            <RigidBody colliders={"hull"} restitution={2}>
              <Torus />
            </RigidBody>

            <CuboidCollider position={[0, -2, 0]} args={[20, 0.5, 20]} />
          </Physics>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Trial;
