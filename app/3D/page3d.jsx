import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const cubeRef = useRef();

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-900">
      <Canvas className="h-full w-full">
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} intensity={1} />
        <mesh ref={cubeRef} position={[0, 0, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="blue" />
        </mesh>
        <OrbitControls enableZoom={false} />
      </Canvas>
      <motion.div
        className="absolute top-10 left-10 text-white text-3xl font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Mon Portfolio 3D 🚀
      </motion.div>
    </div>
  );
}
