import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Appointment from "./components/Appointment";
import Loader from "./components/Loader";

function App() {
  return (
    <div>
      <Loader />
      <Navbar />
      <Hero />
      <About />
      <Testimonials />
      <Services />
      <Contact />
      <Appointment />
      <Footer />
    </div>
  );
}

export default App;
