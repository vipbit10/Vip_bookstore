import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./context/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
<<<<<<< HEAD
      <div className="dark:bg-slate-800 dark:text-white">
=======
      <div className="dark:bg-slate-900 dark:text-white">
>>>>>>> c15737e92cf5cea8e0c60c08c172c415954b2d74
        <App />
      </div>
    </AuthProvider>
  </BrowserRouter>
);
