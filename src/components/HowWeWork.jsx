import React from "react";
import "./HowWeWork.css"; 
import manufacture from "./manufacture.jpg";
import assembly from "./assembly.jpeg";
import technicalsupport from "./technicalsupport.jpeg";
const HowWeWork = () => {
  return (
    <div id="howWeWork">
      <div>
        <h2>How We Work</h2>
      </div>
      <div className="how-we-work-container">
        <div className="step">
          <div className="step-image">
            <img src={manufacture} alt="Step 1" />
          </div>
          <div className="step-description">
            <h2>Manufacture</h2>
          </div>
        </div>

        <div className="arrow">➤</div>

        <div className="step">
          <div className="step-image">
            <img src={assembly} alt="Step 2" />
          </div>
          <div className="step-description">
            <h2>Assembly</h2>
          </div>
        </div>

        <div className="arrow">➤</div>

        <div className="step">
          <div className="step-image">
            <img src={technicalsupport} alt="Step 3" />
          </div>
          <div className="step-description">
            <h2>Technical Support</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
