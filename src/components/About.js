import React from "react";
import Nate from "../Assets/img/nate.png";
import Background from "../Assets/img/background2.jpg";


function About() {
  return (
    <div style = {{backgroundImage: `url(${Background})`, borderBottom: "6px solid white"}}>
        <p className="content is-large" style = {{color: "white"}}>Current Marketeer and Aspiring Full Stack Developer</p>
        <hr />
        <div style = {{display: "flex", alignItems: "center"}}>
        <img className="me" src={Nate}alt="Nathan Underwood" style={{borderRadius: "100%"}}/>
        <div style = {{color: "white", padding: "10px"}}>
          <p id = "aboutP1" className="content is-italic mt-4 content is-large">
          My name is Nathan, but most call me Nate. I currently am an Admissions Director repsonsible for all admissions-marketing efforts at a major private high-school. I am excited to be diving into this journey of becoming a full-stack developer! 
          </p>
          <p className="content is-large">
          I'm confident my experience of aligning product with customer needs will help me work and create applications that are seamless and pleasurable for the user to experience. 
          </p>
        </div>
      </div>
      <hr />
    </div>
    
    
  );
}

export default About;