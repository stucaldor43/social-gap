import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import axios from "axios";
import { ProvideAuth } from "./hooks/use-auth";

axios.defaults.baseURL = import.meta.env.VITE_SERVER_URL;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.withCredentials = true;

ReactDOM.createRoot(document.getElementById("root")).render(
  <ProvideAuth>
    <App />
  </ProvideAuth>
);
