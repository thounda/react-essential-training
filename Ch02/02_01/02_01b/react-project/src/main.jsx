import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

const [firstAnimal, , third] = ["giraffe", "zebra", "bear"];
console.log(third);

createRoot(document.getElementById("root")).render(<App />);
