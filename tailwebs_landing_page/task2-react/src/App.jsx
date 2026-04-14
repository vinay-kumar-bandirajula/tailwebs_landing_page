import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LatestProducts from './components/LatestProducts';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {/* Placeholder for intermediate static sections if needed. Kept simple to focus on requirements. */}
        <section className="bg-dark text-white text-center py-4">
            <p className="m-0 lead">... Other static sections (Stats, Bold Approaches, DIGIT)...</p>
        </section>
        <LatestProducts />
      </main>
      <Footer />
    </>
  );
}

export default App;
