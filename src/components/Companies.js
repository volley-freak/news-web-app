import React from "react";
import cnn from "../assets/cnn-logo.png";
import abc from "../assets/abc-logo1.png";
import nbc from "../assets/nbc-logo.png";
import nytimes from "../assets/nytimes-logo.png";
import bbc from "../assets/bbc_logo.png";

export default function Companies() {
  return (
    <section className="companies">
      <div className="companies-heading">
        <div className="line"></div>
        <h1 className="title">Trusted Over 1000 News Giants</h1>
        <div className="line"></div>
      </div>
      <div className="logos">
        <a href="https://edition.cnn.com/">
          <img src={cnn} alt="cnn-logo" />
        </a>
        <a href="https://abcnews.go.com/">
          <img src={abc} alt="abc-logo" />
        </a>
        <a href="https://www.nbcnews.com/">
          <img src={nbc} alt="nbc-logo" />
        </a>
        <a href="https://www.nytimes.com/">
          <img src={nytimes} alt="nytimes-logo" />
        </a>
        <a href="https://www.bbc.com/">
          <img src={bbc} alt="bbc-logo" />
        </a>
      </div>
    </section>
  );
}
