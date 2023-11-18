import React from "react";
import "./ContactInfo.css";
import contactPhoto from "./contact-photo.JPG";
import linkedin from "./linkedin.png";
const ContactInfo = () => {
  return (
    <div className="contact-info-top" id="contactInfo">
      <header className="header">
        <div className="company-name">
          <h1>RR Enterprises</h1>
        </div>
        <div className="social-links">
          {/* <a href="#">Facebook</a> */}

          <a href="https://www.linkedin.com/in/rohitharavindramyla/">
            <img src={linkedin} alt="LinkedIn Icon" className="social-icon" />
            LinkedIn
          </a>
          {/* <a href="#">Twitter</a> */}
        </div>
      </header>
      <div className="creator">
        <div className="col">
          {" "}
          <div>Rohitha Ravindra Myla</div>
          <div>+91 83175 13691 </div>
          <div>rohitharavindramyla@gmail.com </div>{" "}
        </div>
        <div className="col">
          <div>Hyderabad , Telangana</div>
          <div>NIT Raipur , Chhattisgarh</div>
        </div>
        {/* <div className="col">
          <img
            src={contactPhoto}
            alt="Instagram Icon"
            className="instagram-icon"
          />
        </div> */}
      </div>
    </div>
  );
};

export default ContactInfo;
