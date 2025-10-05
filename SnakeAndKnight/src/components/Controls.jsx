import useEventListeners from "../hooks/PlayerHooks/useEventListeners";
import "./Controls.css";

export function Controls() {
  useEventListeners();
  return (
    <div id="controls"></div>
  );
}