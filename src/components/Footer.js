import React from "react";
import logo from "../assets/company-logo.png";

export default function Footer() {
  return (
    <footer>
      <div className="footer-head">
        <a className="company-logo" href="#main-heading">
          <img src={logo} alt="company-logo" />
          <h3 className="company-title">XYZ News</h3>
        </a>
        <a className="to-top" href="#main-heading">
          <i class="fa-solid fa-angle-up"></i>
          <h3>Back To Top</h3>
        </a>
      </div>
      <div className="links">
        <div className="first-col">
          <h4 className="link-heading">Section</h4>
          <ul className="links-list">
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
          </ul>
        </div>
        <div className="second-col">
          <h4 className="link-heading">Section</h4>
          <ul className="links-list">
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
          </ul>
        </div>
        <div className="third-col">
          <h4 className="link-heading">Section</h4>
          <ul className="links-list">
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
          </ul>
        </div>
        <div className="fourth-col">
          <h4 className="link-heading">Section</h4>
          <ul className="links-list">
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
          </ul>
        </div>
      </div>
      <div className="copyright">Copyright © 2022 XYZ News Internet Ventures. All rights reserved.</div>
    </footer>
  );
}
