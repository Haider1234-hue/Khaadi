import React from 'react';

const Footer = () => {
  return (
    <footer className="custom-footer">
      {/* Top Section */}
      <div className="footer-section-top">
        <div className="footer-container">
          <span className="help-text">NEED HELP?</span>
          <div className="faq-wrapper">
            <img src="faq-icon.png" alt="" className="faq-icon" />
            <span className="faq-text">FAQS</span>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="footer-section-middle">
        <div className="footer-container main-grid">
          {/* Column 1 */}
          <div className="footer-col">
            <h4 className="col-title">HELP</h4>
            <ul className="footer-links">
              <li><a href="#faq">Frequently Asked Questions</a></li>
              <li><a href="#terms">Terms & Conditions</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#disclaimer">Disclaimer</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="footer-col">
            <h4 className="col-title">MORE FROM KHAADI</h4>
            <ul className="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#blogs">Blogs</a></li>
              <li><a href="#care">Cloth Care</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="footer-col">
            <h4 className="col-title">OUR SOCIALS</h4>
            <div className="social-icons-row">
              <a href="#tiktok" className="social-box tiktok"></a>
              <a href="#youtube" className="social-box youtube"></a>
              <a href="#facebook" className="social-box facebook"></a>
              <a href="#instagram" className="social-box instagram"></a>
            </div>

            <div className="newsletter-box">
              <h4 className="col-title">GET THE LATEST NEWS</h4>
              <div className="input-wrapper">
                <input type="email" placeholder="Email Address" className="newsletter-input" />
                <button className="confirm-btn">CONFIRM</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-section-bottom">
        <div className="footer-container bottom-flex">
          <div className="trust-badges">
            <div className="badge-item">
              <p className="badge-label">100% Safe Checkout</p>
              <div className="card-icons">
                <img src="visa-mastercard.png" alt="Visa/Mastercard" />
              </div>
            </div>
            <div className="badge-item">
              <p className="badge-label">Secured by</p>
              <div className="godaddy-badge">
                <span className="gd-icon">🔒</span>
                <div className="gd-text">
                  <strong>GODADDY</strong>
                  <small>VERIFIED & SECURED</small>
                </div>
              </div>
            </div>
          </div>

          <div className="copyright-wrapper">
            <div className="footer-brand">KHAADI</div>
            <p className="copyright-text">
              Copyright © 2026 Weaves Corporation Limited. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;