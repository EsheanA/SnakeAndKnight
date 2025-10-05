import { Canvas } from "@react-three/fiber";

export const Scene = ({ children }) => {
  return (
    <Canvas
      gl = {{antialias: true}}
      orthographic={true}
      camera={{
        up: [0, 0, 1],
        // position: [-300, -300, 300],
        position: [50, -200, 100],
      }}
    >
      <ambientLight />
      <directionalLight position={[-100, -100, 200]} />
      {children}
    </Canvas>
  );
};
