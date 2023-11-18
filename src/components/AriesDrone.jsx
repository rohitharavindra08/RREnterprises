import React from "react";
import "./AriesDrone.css";
import AriesDrone2 from "./Ariesdrone2.PNG";
import AriesDrone1 from "./AriesDrone.PNG";
import IMG1 from "./IMG_8043.PNG";
import IMG2 from "./IMG_9322.JPG";
import "./AriesDrone.css"; 

const AriesDrone = () => {
  return (
    <div className="our-project">
      <div className="pro project-left">
        <img src={AriesDrone2} alt="Project 1" />
      </div>
      <div className="pro project-right">
        <img src={AriesDrone2} alt="Project 2" />
      </div>
      <div className="pro project-top">
        <img src={AriesDrone2} alt="Project 3" />
      </div>
      <div className="pro project-bottom">
        <img src={AriesDrone2} alt="Project 4" />
      </div>
      <div className="company-infor">
        <h2>Company Name</h2>
        <p>Company description goes here...</p>
      </div>
    </div>
  );
};

export default AriesDrone;
