import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./assets/global.css";

const root = document.getElementById("root");

if (root) {
  const rootElement = createRoot(root);
  rootElement.render(<App />);
}
