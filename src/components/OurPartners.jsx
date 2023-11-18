import React from "react";
import "./OurPartners.css";
import partner1 from "./partner1.JPG";
const OurPartners = () => {
  return (
    <div className="partners-container" id="partners">
      <h1 className="partners-title">Our Partners</h1>
      <div className="partner-card">
        <a
          href="https://sreeven-cnc-technologies-pvtltd.business.site/"
          target="_blank"
          rel="noopener noreferrer"
          className="partner-link"
        >
          <img src={partner1} alt="Partner 1" />
          <h2>SREEVEN CNC</h2>
        </a>
        <p>Supplies and Deals CNC Machines across Korea, Japan and India</p>
      </div>
    </div>
  );
};

export default OurPartners;
