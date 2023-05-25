import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/generic/reset.css";
import "./styles/elements/base.css";
import "./styles/settings/colors.css";
import "./styles/settings/size.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
