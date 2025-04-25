import React from 'react'
import './Prices.css'

const Prices = () => {
  return (
    <div className="pricing">
      <div className="pricing-hero">
        <h1>Simple, Transparent Pricing</h1>
        <p>Choose the plan that best fits your needs</p>
      </div>

      <div className="pricing-grid">
        <div className="pricing-card">
          <h2>Basic</h2>
          <div className="price">
            <span className="amount">$0</span>
            <span className="period">/month</span>
          </div>
          <ul className="features">
            <li>Basic market data</li>
            <li>Limited price alerts</li>
            <li>Basic portfolio tracking</li>
            <li>Email support</li>
          </ul>
          <button className="select-plan">Get Started</button>
        </div>

        <div className="pricing-card featured">
          <div className="popular-tag">Most Popular</div>
          <h2>Pro</h2>
          <div className="price">
            <span className="amount">$29</span>
            <span className="period">/month</span>
          </div>
          <ul className="features">
            <li>Advanced market data</li>
            <li>Unlimited price alerts</li>
            <li>Advanced portfolio tracking</li>
            <li>Priority email support</li>
            <li>Technical analysis tools</li>
          </ul>
          <button className="select-plan">Start Free Trial</button>
        </div>

        <div className="pricing-card">
          <h2>Enterprise</h2>
          <div className="price">
            <span className="amount">$99</span>
            <span className="period">/month</span>
          </div>
          <ul className="features">
            <li>Full market data access</li>
            <li>Custom alerts system</li>
            <li>Advanced portfolio tools</li>
            <li>24/7 priority support</li>
            <li>API access</li>
            <li>Custom solutions</li>
          </ul>
          <button className="select-plan">Contact Sales</button>
        </div>
      </div>
    </div>
  )
}

export default Prices
