import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am<span className="purple"> Arnav Ranjan</span> from
            Bilaspur, Chhattisgarh, India.
            <br />I am currently a final year undergrad at{" "}
            <span className="purple">NIT Patna </span> under Computer Science
            and Engineering department.
            <br /> I can quickly learn and unlearn technologies to deliver the
            requirements. My areas of interest are data structures and
            algorithms, web development and computer vision problems.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Badminton
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching TV Series
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
