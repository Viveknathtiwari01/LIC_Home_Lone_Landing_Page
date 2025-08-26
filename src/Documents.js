import React from 'react';

// Data for the four document cards, including new SVG icons.
const documentsData = [
  {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cpath d='M42,2H14a4,4,0,0,0-4,4V58a4,4,0,0,0,4,4H50a4,4,0,0,0,4-4V12Z' style='fill:%230a4aa6'/%3E%3Cpath d='M42,2V12h10' style='fill:%230a4aa6'/%3E%3Ccircle cx='32' cy='28' r='6' style='fill:%23ffc107'/%3E%3Cpath d='M22,46a10,10,0,0,1,20,0Z' style='fill:%23ffc107'/%3E%3C/svg%3E",
    title: 'KYC',
    items: [
      'Age and Photo ID proof: PAN Card, Aadhar Card, Passport',
      'Valid Address proof',
    ],
  },
  {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cpath d='M54,22H10a4,4,0,0,0-4,4V58a4,4,0,0,0,4,4H54a4,4,0,0,0,4-4V26A4,4,0,0,0,54,22Z' style='fill:%230a4aa6'/%3E%3Cpath d='M23.2,16.8a12,12,0,1,1,17.6,0' style='fill:none;stroke:%23ffc107;stroke-linecap:round;stroke-miterlimit:10;stroke-width:4px'/%3E%3Cpolygon points='23.2 24.8 15.2 16.8 23.2 8.8 23.2 24.8' style='fill:%23ffc107'/%3E%3Cpath d='M40.8,8.8a12,12,0,0,1-17.6,0' style='fill:none;stroke:%23ffc107;stroke-linecap:round;stroke-miterlimit:10;stroke-width:4px'/%3E%3Cpolygon points='40.8 0.8 48.8 8.8 40.8 16.8 40.8 0.8' style='fill:%23ffc107'/%3E%3C/svg%3E",
    title: 'Balance Transfer',
    items: [
      'Loan Statement - Last 12months',
      'Sanction Letter & Fore Closure Letter',
      'List of Original documents',
    ],
  },
  {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ccircle cx='32' cy='16' r='8' style='fill:%230a4aa6'/%3E%3Cpath d='M20,54a12,12,0,0,1,24,0Z' style='fill:%230a4aa6'/%3E%3Cpath d='M28,32h8v10a4,4,0,0,1-4,4h0a4,4,0,0,1-4-4V32Z' style='fill:%23ffc107'/%3E%3C/svg%3E",
    title: 'Salaried',
    items: [
      'Current Employer offer letter',
      'Income Proof: Latest 3 months salary slips, 6 months Bank Statement, Form 16',
    ],
  },
  {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cpath d='M54,18H10a4,4,0,0,0-4,4V54a4,4,0,0,0,4,4H54a4,4,0,0,0,4-4V22A4,4,0,0,0,54,18Z' style='fill:%230a4aa6'/%3E%3Cpath d='M42,18V10a4,4,0,0,0-4-4H26a4,4,0,0,0-4,4v8' style='fill:%23ffc107'/%3E%3C/svg%3E",
    title: 'Self Employed',
    items: [
      'Business Proof - Vintage 3 years (min)',
      'Income Proof: Income Tax returns - preferably 3 years, 1 year current / savings account bank statement',
    ],
  },
];

function Documents() {
  return (
    <section className="documents-section">
      <div className="container">
        <h2>Documents Required</h2>
        <div className="documents-grid">
          {documentsData.map((doc, index) => (
            <div className="document-card" key={index}>
              <img src={doc.icon} alt={`${doc.title} icon`} className="icon" />
              <h3>{doc.title}</h3>
              <ul>
                {doc.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Documents;