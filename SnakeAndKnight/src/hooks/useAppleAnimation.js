// import { useFrame } from "@react-three/fiber";
// import * as THREE from "three";

// export function useAppleAnimation(applesRef) {
//   useFrame((_, delta) => {
//     for (const apple of applesRef.current) {
//       apple.progress += delta / apple.duration;
//       const p = Math.min(apple.progress, 1);

//       // interpolate position
//       const pos = new THREE.Vector3().lerpVectors(apple.start, apple.end, p);
//       pos.z += Math.sin(p * Math.PI) * 12; // add arc
//       apple.mesh.position.copy(pos);

//       if (p >= 1) {
//         // optional: stop or remove apple
//         apple.mesh.position.copy(apple.end);
//       }
//     }
//   });
// }

// useAppleAnimation.js
import { useFrame } from "@react-three/fiber";

export function useAppleAnimation(applesRef) {
  useFrame((_, delta) => {
    applesRef.current.forEach((apple, i) => {
      apple.progress += delta / apple.duration;

      if (apple.progress >= 1) {
        // Reached destination, clamp & stop
        apple.mesh.position.copy(apple.end);
        applesRef.current.splice(i, 1); // remove finished apples if you want
        return;
      }

      // Linear interpolation
      apple.mesh.position.lerpVectors(apple.start, apple.end, apple.progress);

      // Add arc motion (z-up) using a sine curve
      apple.mesh.position.z = Math.sin(apple.progress * Math.PI) * 10;
    });
  });
}
