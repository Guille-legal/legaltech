import React from 'react';
import './Pricing.css'; // Create this CSS file for styling

const Pricing = () => {
  return (
    <div className="pricing-page">
      <h2>Pricing Plans</h2>
      <div className="pricing-container">
        <div className="pricing-card">
          <h3>Basic Plan</h3>
          <p>5 EUR per month</p>
          <button className="btn">Choose Plan</button>
        </div>
        <div className="pricing-card">
          <h3>Pro Plan</h3>
          <p>10 EUR per month</p>
          <button className="btn">Choose Plan</button>
        </div>
        <div className="pricing-card">
          <h3>Enterprise Plan</h3>
          <p>20 EUR per month</p>
          <button className="btn">Choose Plan</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;