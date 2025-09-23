import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Goals from './components/Goals';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Goals />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App; 