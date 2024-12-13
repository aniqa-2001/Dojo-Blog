import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Ensure you are calling createRoot only once
const root = ReactDOM.createRoot(document.getElementById("root")); // Only call it once
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
