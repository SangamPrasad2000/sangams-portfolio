import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Sangam Prasad</span>
            from <span className="purple"> West bengal, India.</span>
            <br /> I am a Bachelor of Computer Engineering from <span className="purple"> J.C Bose University of Science and Technlogy. </span>
            <br />
            Additionally, I have been employed as a software developer intern at<span className="purple"> Samsung SDS.</span>
            <br/>And currently I am exploring the technical documentation role at <span className="purple" >Paytm</span>.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Video Editing
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Sangam</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
