import React from "react";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
<<<<<<< HEAD
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";


=======
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";

>>>>>>> c15737e92cf5cea8e0c60c08c172c415954b2d74
function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
      <Toaster />
        <Routes>
          <Route path="/" element={<Home />} />
<<<<<<< HEAD
          <Route path="/contact" element={<Contact />} />
         
=======
>>>>>>> c15737e92cf5cea8e0c60c08c172c415954b2d74
          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<Signup />} />
        </Routes>
<<<<<<< HEAD
     
=======
        <Toaster />
>>>>>>> c15737e92cf5cea8e0c60c08c172c415954b2d74
      </div>
    </>
  );
}

export default App;
