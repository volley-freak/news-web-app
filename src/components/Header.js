import React from "react";
import "../App.css";
import logo from "../assets/company-logo.png";

export default function(props) {
  return (
    <header>
      {/* <h1 id="main-heading">XYZ NEWS COMPANY</h1> */}
      <div className="company-logo" id="main-heading" href="#main-heading">
          <img src={logo} alt="company-logo" />
          <h1 className="company-title">XYZ News</h1>
        </div>
      <form id="search-section">
        <input placeholder="search" typeof="submit" onSubmit={props.handleSubmit}/>
        <i className="fa-solid fa-magnifying-glass"></i>
      </form>
      <ul className="filters">
      <li className="filter-news" onClick={props.handleClick}>
          general
        </li>
        <li className="filter-news" onClick={props.handleClick}>
          science
        </li>
        <li className="filter-news" onClick={props.handleClick}>
          technology
        </li>
        <li className="filter-news" onClick={props.handleClick}>
          entertainment
        </li>
        <li className="filter-news" onClick={props.handleClick}>
          business
        </li>
        <li className="filter-news" onClick={props.handleClick}>
          health
        </li>
        <li className="filter-news" onClick={props.handleClick}>
          sports
        </li>
      </ul>
    </header>
  );
}
