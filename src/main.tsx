import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./assets/styles/generic/reset.css";
import "./assets/styles/elements/base.css";
import "./assets/styles/settings/colors.css";
import "./assets/styles/settings/size.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
