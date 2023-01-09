import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/header.css";
import "./styles/entete.css";
import "./styles/logement.css";
import "./styles/error.css";
import "./styles/footer.css";
import "./styles/dropdown.css";
import "./styles/logementid.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
