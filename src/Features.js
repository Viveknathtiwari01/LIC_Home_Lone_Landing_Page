import React from 'react';

// An array to hold the data for each feature card. This makes the code cleaner.
const featuresData = [
  {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cpath d='M32,5A27,27,0,1,1,5,32,27,27,0,0,1,32,5m0-4a31,31,0,1,0,31,31A31,31,0,0,0,32,1Z' style='fill:%230a4aa6'/%3E%3Cpath d='M25.6,23.5a3.1,3.1,0,1,1,3.1-3.1A3.1,3.1,0,0,1,25.6,23.5Z' style='fill:%23ffc107'/%3E%3Cpath d='M38.4,43.6a3.1,3.1,0,1,1,3.1-3.1A3.1,3.1,0,0,1,38.4,43.6Z' style='fill:%23ffc107'/%3E%3Cpath d='M41.5,20.5,22.5,43.5' style='fill:none;stroke:%23ffc107;stroke-miterlimit:10;stroke-width:3px'/%3E%3C/svg%3E",
    alt: "Interest Rate Icon",
    text: "Attractive Rate of Interest"
  },
  {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cpath d='M58,58H6a2,2,0,0,1-2-2V34.8L32,13.2,60,34.8V56A2,2,0,0,1,58,58Z' style='fill:%230a4aa6'/%3E%3Cpath d='M51,19.2,32,4,13,19.2' style='fill:none;stroke:%230a4aa6;stroke-miterlimit:10;stroke-width:4px'/%3E%3Ccircle cx='24' cy='32' r='5' style='fill:%23ffc107'/%3E%3Cpath d='M18,50v-9.5a6,6,0,0,1,12,0V50' style='fill:none;stroke:%23ffc107;stroke-miterlimit:10;stroke-width:4px'/%3E%3Ccircle cx='40' cy='32' r='5' style='fill:%23ffc107'/%3E%3Cpath d='M34,50v-9.5a6,6,0,0,1,12,0V50' style='fill:none;stroke:%23ffc107;stroke-miterlimit:10;stroke-width:4px'/%3E%3C/svg%3E",
    alt: "Eligibility Icon",
    text: "Customised Eligibility"
  },
  {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cpath d='M32,5A27,27,0,1,1,5,32,27,27,0,0,1,32,5m0-4a31,31,0,1,0,31,31A31,31,0,0,0,32,1Z' style='fill:%230a4aa6'/%3E%3Cpath d='M32,14V32h14' style='fill:none;stroke:%230a4aa6;stroke-linecap:round;stroke-linejoin:round;stroke-width:4px'/%3E%3Cpath d='M48,15.5a18,18,0,0,1-8,24' style='fill:none;stroke:%23ffc107;stroke-linecap:round;stroke-linejoin:round;stroke-width:4px'/%3E%3Cpolygon points='40.5 15.5 48 15.5 44 10.5 40.5 15.5' style='fill:%23ffc107'/%3E%3C/svg%3E",
    alt: "Loan Tenure Icon",
    text: "Loan Tenure upto 30Years"
  },
  {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect x='12' y='8' width='40' height='48' rx='4' style='fill:%230a4aa6'/%3E%3Crect x='22' y='18' width='20' height='4' rx='2' style='fill:%23ffc107'/%3E%3Ccircle cx='19' cy='32' r='1.5' style='fill:%23ffc107'/%3E%3Crect x='24' y='30' width='16' height='4' rx='2' style='fill:%23ffffff'/%3E%3Ccircle cx='19' cy='42' r='1.5' style='fill:%23ffc107'/%3E%3Crect x='24' y='40' width='16' height='4' rx='2' style='fill:%23ffffff'/%3E%3C/svg%3E",
    alt: "Documentation Icon",
    text: "Simple Documentation"
  },
  {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cpath d='M44,48l-4,8h-4l4-8' style='fill:none;stroke:%230a4aa6;stroke-miterlimit:10;stroke-width:4px'/%3E%3Ccircle cx='24' cy='52' r='6' style='fill:%230a4aa6'/%3E%3Ccircle cx='46' cy='52' r='6' style='fill:%230a4aa6'/%3E%3Cpath d='M24,52H12V34a4,4,0,0,1,4-4h20' style='fill:none;stroke:%230a4aa6;stroke-miterlimit:10;stroke-width:4px'/%3E%3Cpath d='M46,52V36a4,4,0,0,0-4-4' style='fill:none;stroke:%230a4aa6;stroke-miterlimit:10;stroke-width:4px'/%3E%3Ccircle cx='38' cy='18' r='7' style='fill:%23ffc107'/%3E%3Cpath d='M32,32v-6a6,6,0,0,1,12,0v6' style='fill:none;stroke:%23ffc107;stroke-miterlimit:10;stroke-width:4px'/%3E%3C/svg%3E",
    alt: "Door Step Service Icon",
    text: "Quick Door Step Service"
  },
  {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cpath d='M32,5A27,27,0,1,1,5,32,27,27,0,0,1,32,5m0-4a31,31,0,1,0,31,31A31,31,0,0,0,32,1Z' style='fill:%230a4aa6'/%3E%3Cpath d='M32,14V32H46' style='fill:none;stroke:%230a4aa6;stroke-linecap:round;stroke-linejoin:round;stroke-width:4px'/%3E%3Cpath d='M22,34l8,8,12-12' style='fill:none;stroke:%23ffc107;stroke-linecap:round;stroke-linejoin:round;stroke-width:5px'/%3E%3C/svg%3E",
    alt: "Quick Approval Icon",
    text: "Quick Approval"
  }
];

function Features() {
  return (
    <section className="features-section container">
      <h2>Features & Benefits</h2>
      <div className="features-grid">
        {featuresData.map((feature, index) => (
          <div className="feature-card" key={index}>
            <img src={feature.icon} alt={feature.alt} className="icon" />
            <p>{feature.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;