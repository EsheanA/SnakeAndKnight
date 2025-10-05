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
