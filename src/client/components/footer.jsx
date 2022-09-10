import React from "react";
import { Link } from "react-router-dom";

const Footer = (props) => {
  const exclusionArray = [
    "/pages/doctor-grid",
    "/pages/doctor-list",
    "/pages/video-call",
    "/pages/voice-call",
    "/pages/chat-doctor",
    "/patient/doctor-list",
    "/patient/doctor-grid",
  ];
  if (exclusionArray.indexOf(props.location.pathname) >= 0) {
    return "";
  }
  return (
    <footer className="footer">
        {/* Footer Top */}
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                {/* Footer Widget */}
                <div className="footer-widget footer-menu">
                  <h2 className="footer-title">Quick Links</h2>
                  <ul>
                    <li>
                      <Link to="/pages/about-us">About Us</Link>
                    </li>
                    <li>
                      <Link to="/pages/contact-us">Contact Us</Link>
                    </li>
                    <li>
                      <Link to="/pages/faq">Faq</Link>
                    </li>
                    <li>
                      <a to="#">Help</a>
                    </li>
                  </ul>
                </div>
                {/* /Footer Widget */}
              </div>
              <div className="col-lg-3 col-md-6">
                {/* Footer Widget */}
                <div className="footer-widget footer-menu">
                  <h2 className="footer-title">Categories</h2>
                    <ul>
                      <li>
                        <Link to="/pages/search">Computer</Link>
                      </li>
                      <li>
                        <Link to="/pages/search">Interior</Link>
                      </li>
                      <li>
                        <Link to="/pages/search">Car Wash</Link>
                      </li>
                      <li>
                        <Link to="/pages/search">Cleaning</Link>
                      </li>
                    </ul>
                </div>
                {/* /Footer Widget */}
              </div>
              <div className="col-lg-3 col-md-6">
                {/* Footer Widget */}
                <div className="footer-widget footer-contact">
                  <h2 className="footer-title">Contact Us</h2>
                  <div className="footer-contact-info">
                    <div className="footer-address">
                      <span><i className="far fa-building" /></span>
                      <p>367 Hillcrest Lane, Irvine, California, United States</p>
                    </div>
                    <p><i className="fas fa-headphones" /> 321 546 8764</p>
                    <p className="mb-0"><i className="fas fa-envelope" /> truelysell@example.com</p>
                  </div>
                </div>
                {/* /Footer Widget */}
              </div>
              <div className="col-lg-3 col-md-6">
                {/* Footer Widget */}
                <div className="footer-widget">
                  <h2 className="footer-title">Follow Us</h2>
                  <div className="social-icon">
                    <ul>
                      <li>
                        <a href="#" target="_blank"><i className="fab fa-facebook-f" /> </a>
                      </li>
                      <li>
                        <a href="#" target="_blank"><i className="fab fa-twitter" /> </a>
                      </li>
                      <li>
                        <a href="#" target="_blank"><i className="fab fa-youtube" /></a>
                      </li>
                      <li>
                        <a href="#" target="_blank"><i className="fab fa-google" /></a>
                      </li>
                    </ul>
                  </div>
                  <div className="subscribe-form">
                    <input type="email" className="form-control" placeholder="Enter your email" />
                    <button type="submit" className="btn footer-btn">
                      <i className="fas fa-paper-plane" />
                    </button>
                  </div>
                </div>
                {/* /Footer Widget */}
              </div>
            </div>
          </div>
        </div>
        {/* /Footer Top */}
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="container">
            {/* Copyright */}
            <div className="copyright">
              <div className="row">
                <div className="col-md-6 col-lg-6">
                  <div className="copyright-text">
                    <p className="mb-0">© 2020 <Link to="/home">Truelysell</Link>. All rights reserved.</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6">
                  {/* Copyright Menu */}
                  <div className="copyright-menu">
                    <ul className="policy-menu">
                      <li>
                        <Link to="/pages/terms">Terms and Conditions</Link>
                      </li>
                      <li>
                        <Link to="/pages/privacy">Privacy</Link>
                      </li>
                    </ul>
                  </div>
                  {/* /Copyright Menu */}
                </div>
              </div>
            </div>
            {/* /Copyright */}
          </div>
        </div>
        {/* /Footer Bottom */}
      </footer>    
  );
};

export default Footer;
