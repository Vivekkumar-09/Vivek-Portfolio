import React from "react";
import { Route, Routes } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Certificates from "../pages/Certificates";
import Skills from "../pages/Skills";
import Contact from "../pages/Contact";
import Error from "../pages/Error";
import ResumeViwer from "../pages/ResumeViwer";


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      <Route path="/resume" element={<ResumeViwer />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default AppRoutes;
