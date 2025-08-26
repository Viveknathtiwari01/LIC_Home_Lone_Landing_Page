import React from 'react';

// Array of product names to keep the JSX clean
const productList = [
  'Home Loan',
  'Home Renovation Loan',
  'Home Extension Loan',
  'Plot Loan',
  'Home Construction Loan',
  'Home Loan Balance Transfer'
];

function Products() {
  return (
    <section className="products-section">
      <div className="container">
        <h2>
          LIC HFL offers wide variety of <strong>Home Loans</strong> which will fulfill your needs
        </h2>

        <div className="products-grid">
          {productList.map((product, index) => (
            <div className="product-item" key={index}>
              {product}
            </div>
          ))}
        </div>

        <button class="shadow-button">
      Explore Our Products →
    </button>
      </div>
    </section>
  );
}

export default Products;