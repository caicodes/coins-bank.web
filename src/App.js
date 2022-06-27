import React from "react";
import Connect from "./components/Connect";
import Contact from "./components/Contact";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";

function App() {
  return (
    <>
    <Navbar  />
    <Hero />
    <Featured />
    <Signup />
    <Contact />
    <Connect />
    <Footer />
    </>
  );
}

export default App;
