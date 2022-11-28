import React from "react";

function About() {
  return (
    <div>
      <p className="content is-medium">Current Marketeer and Aspiring Full Stack Developer</p>
      <hr />
      <img className="my-pic" src={'public\images\nate.png'} alt="Nathan Underwood"/>
      <p className="content is-italic mt-4">
        My name is Nathan, but most call me Nate. I currently am an Admissions Director repsonsible for all admissions-marketing efforts at a major private high-school. I am excited to be diving into this journey of becoming a full-stack developer! 
      </p>
      <p className="content">
        I'm confident my experience of aligning product with customer needs will help me work and create applications that are seamless and pleasurable for the user to experience. 
      </p>
    </div>
  );
}

export default About;