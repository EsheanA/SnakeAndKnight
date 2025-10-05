import useEventListeners from "../hooks/useEventListeners";
import "./Controls.css";

export function Controls() {
  useEventListeners();
  return (
    <div id="controls"></div>
  );
}