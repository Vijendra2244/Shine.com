import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { LoginContextProvider } from "./Context_Api/Context.jsx";
import {BrowserRouter} from "react-router-dom"

ReactDOM.createRoot(document.getElementById("root")).render(
  <LoginContextProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </LoginContextProvider>
);
