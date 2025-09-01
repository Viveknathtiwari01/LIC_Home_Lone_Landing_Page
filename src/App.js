import React from 'react';
import './App.css';
import Features from './Features';
import Products from './Products';
import Documents from './Documents';
import Hero from './Hero';
import SeparationBar from './SeparationBar'
import Promotional from './Promotional'
import EMICalculator from './EMICalculator'
import Faq from './Faq';
import TestimonialSlider from './TestimonialSlider';
import Footer from './Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 


function App() {

  return (
    <div className="App">

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <h66ader className="site-header">
        <div className="container header-content">
          <div className="brand">
            <img src="/LIC.png" alt="LIC HFL" className="brand-logo" />
          </div>
          <div className="header-actions">
            <button className="toll-free-btn">
              Instant Help | 9039106555
            </button>
          </div>
        </div>
      </h66ader>

      <main>
        <Hero/>
        
        {/* ======= separator-section  ========= */}

        <SeparationBar />
        
        {/* ======= promotional-section  ========= */}

        <Promotional />

        {/* ========  EMI Calculator Section  ========= */}

        <EMICalculator />

        {/* ========  Features Section  ========= */}

        <Features />

        {/* ========  Products Section  ========= */}

        <Products />

        {/* ========  Documents Section  ========= */}

        <Documents />

        {/* ========  FAQ Section  ========= */}

        <Faq />

        {/* ========  Testimonial Section  ========= */}

        <TestimonialSlider />

        {/* ========  Footer Section  ========= */}
        
        <Footer />

      </main>

    </div>
  );
}

export default App;
