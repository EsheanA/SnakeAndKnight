import { useEffect } from "react";
import { queueMove } from "../stores/player";

export default function useEventListeners() {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "w") {
        event.preventDefault();
        queueMove("forward");
      } else if (event.key === "s") {
        event.preventDefault();
        queueMove("backward");
      } else if (event.key === "a") {
        event.preventDefault();
        queueMove("left");
      } else if (event.key === "d") {
        event.preventDefault();
        queueMove("right");
      }
    //   else if(event.key === "Space"){
    //     console.log("Jump!");
    //   }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
}