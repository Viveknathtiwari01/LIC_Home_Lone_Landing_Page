import React from 'react';
const SeparationBar = () => {
  return (
    <section className="separator-section">
      <div className="separator-content">
        <div className="separator-text">
          <h2>We have served <span className="highlight">30 Lakhs+</span> families</h2>
        </div>
        <div className="separator-image">
          <img src="/happy_family.png" alt="Happy Family" />
        </div>
      </div>
    </section>
  );
};

export default SeparationBar;