import React from 'react';
const Promotional = () => {
  return (
    <section className="promotional-section">
      <div className="container promotional-content">
        <div className="family-image-container">
          <img src="/family.jpg" alt="Happy Family" />
        </div>
        <div className="promotional-info">
          <h2>At LIC Housing Finance we help families to achieve their dream home</h2>
          <div className="stats-container">
            <div className="stat-box">
              <div className="stat-number">7.50%* ROI</div>
              <div className="stat-label">Starting ROI for Home Loan</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">3.05 Lakhs Crore+</div>
              <div className="stat-label">Loan Portfolio</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">450+</div>
              <div className="stat-label">Operating Center</div>
            </div>
          </div>
          <button className="cta-button">Apply For Home Loan Now →</button>
        </div>
      </div>
      <div className="decorative-elements">
        <div className="yellow-circle"></div>
        <div className="yellow-stripes"></div>
      </div>
    </section>
  );
};

export default Promotional;