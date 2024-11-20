import React from "react";
import { FaLinkedin ,FaGithubSquare,FaFacebookSquare ,FaTwitterSquare } from "react-icons/fa";
import "../../style/Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
  <div className="container">
    <div className="footer-flex">
      <div className="footer-section">
        <h2 className="footer-title">About Us</h2>
        <p className="footer-text">
          We are a company dedicated to providing the best services and
          products to our customers. Our mission is to enhance the lives of
          our users through innovative solutions.
        </p>
      </div>
      <div className="footer-section">
        <h2 className="footer-title">Quick Links</h2>
        <ul className="footer-list">
          <li><a href="#Home" className="footer-link">Home</a></li>
          <li><a href="#Services" className="footer-link">Services</a></li>
          <li><a href="#About" className="footer-link">About</a></li>
          <li><a href="#Contact" className="footer-link">Contact</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h2 className="footer-title">Follow Us</h2>
        <div className="flex space-x-4">
              <a href="#" className="text-gray-400 text-2xl transition-all duration-200 hover:text-blue-500 transform hover:scale-150 ">
                <FaLinkedin/>
              </a>
              <a href="#"  className="text-gray-400 text-2xl transition-all duration-200 hover:text-blue-500 transform hover:scale-150 ">
                <FaTwitterSquare/>
              </a>
              <a href="#"  className="text-gray-400 text-2xl transition-all duration-200 hover:text-blue-500 transform hover:scale-150 ">
                <FaGithubSquare/>
              </a>
              <a href="#"  className="text-gray-400 text-2xl transition-all duration-200 hover:text-blue-500 transform hover:scale-150 ">
                <FaFacebookSquare/>
              </a>
            </div>
      </div>
    </div>
    <div className="footer-bottom">
      &copy; 2023 My Website. All rights reserved.
    </div>
  </div>
</footer>

  );
};


export default Footer;