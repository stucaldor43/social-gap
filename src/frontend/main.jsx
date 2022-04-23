import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.withCredentials = true;

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
