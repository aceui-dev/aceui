import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { initTheme, ThemeProvider } from "./contexts/ThemeContext";
import "./design-tokens.css";
import "./index.css";

initTheme();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
