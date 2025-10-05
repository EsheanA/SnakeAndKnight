import { useEffect } from "react";
import { queueMove } from "../stores/player";

export default function useEventListeners({ throwApple }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "w") {
        queueMove("forward");
      } else if (event.key === "s") {
        queueMove("backward");
      } else if (event.key === "a") {
        queueMove("left");
      } else if (event.key === "d") {
        queueMove("right");
      } else if (event.key === "e") {
        throwApple("forward");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [throwApple]);
}