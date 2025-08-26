import React, { useState } from "react";
// Storing FAQ data in an array of objects for easier management
const faqData = [
  {
    id: 1,
    question: "What is Home Loan?",
    answer:
      "A home loan is a secured loan that is obtained to purchase a property by offering it as collateral. The property can be an under-construction property, a ready-built purchase from the builder/developer, the purchase of a resale property, the construction of a house on a plot, the extension of an existing house, the repair/renovation of an existing flat/house, or the transfer of your existing home loan from another bank or financial institution to LIC Housing Finance Ltd. The home loan is repaid through EMIs. After repayment, the property's title is transferred back to the borrower.",
  },
  {
    id: 2,
    question: "Who can apply for a housing loan?",
    answer:
      "Any individual meeting LICHFL's eligibility criteria, including salaried employees, self-employed professionals, and business owners, can apply for a housing loan.",
  },
  {
    id: 3,
    question: "What documents are required for a housing loan application?",
    answer:
      "Generally, you will need identity proof (like an Aadhar card or passport), address proof, income proof (salary slips or ITR for self-employed), and property documents. The exact list may vary based on your profile.",
  },
  {
    id: 4,
    question: "How is the EMI for my loan calculated?",
    answer:
      "The Equated Monthly Instalment (EMI) is calculated using a formula that takes into account the loan principal, the interest rate, and the loan tenure. The formula is: EMI = P × r × ((1+r)^n) / ((1+r)^n - 1) where P is the principal, r is the monthly interest rate, and n is the number of months.",
  },
  {
    id: 5,
    question: "Can I prepay my outstanding housing loan amount?",
    answer:
      "Yes, you can prepay your housing loan, either partially or in full. For floating rate home loans, there are generally no prepayment charges.",
  },
  {
    id: 6,
    question:
      "What is the difference between a fixed rate of interest and a floating rate of interest?",
    answer:
      "A fixed interest rate remains unchanged for the entire loan tenure, providing a predictable EMI. A floating interest rate is linked to a benchmark rate and can change over the loan tenure, causing your EMI to increase or decrease.",
  },
  {
    id: 7,
    question: "What is a Loan Against Property (LAP)?",
    answer:
      "A Loan Against Property (LAP) is a secured loan where you mortgage your existing residential or commercial property to get funds for various personal or business needs.",
  },
  {
    id: 8,
    question:
      "What is the maximum term for which I can avail a Loan Against Property (LAP)?",
    answer:
      "The maximum tenure for a Loan Against Property can typically go up to 15 years, depending on the lender's policy and the borrower's profile.",
  },
  {
    id: 9,
    question: "How do I get my interest certificate or repayment schedule?",
    answer:
      "You can typically download your interest certificate and repayment schedule from the lender's official website through their customer portal or request it from the nearest branch.",
  },
  {
    id: 10,
    question: "Can NRIs apply for housing loans?",
    answer:
      "Yes, Non-Resident Indians (NRIs) are eligible to apply for housing loans in India, subject to the fulfillment of specific criteria laid out by the lender and regulatory bodies like the RBI.",
  },
];

const Faq = () => {
  // State to keep track of the currently open FAQ item's ID.
  // We set it to 1 initially to have the first item open by default.
  const [openFaqId, setOpenFaqId] = useState(null);

  // Function to toggle the FAQ item
  const handleToggle = (id) => {
    // If the clicked item is already open, close it. Otherwise, open the new one.
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section>
      <div className="faq-container">
        <h1 className="faq-title">FAQ's</h1>
        <div className="accordion">
          {faqData.map((item) => (
            <div
              key={item.id}
              className={`faq-item ${openFaqId === item.id ? "active" : ""}`}
            >
              <button
                className="faq-question"
                onClick={() => handleToggle(item.id)}
              >
                <span>
                  {item.id}. {item.question}
                </span>
                <i className="fas fa-chevron-down"></i>
              </button>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
