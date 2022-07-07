import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import Contact from "./ContactForm";
import ResumeNew from "./Resume/ResumeNew";

function Footer() {
  return (
    <Container fluid className="footer" id="contact">
      <Row style={{ justifyContent: "flex-start", padding: "10px" }}>
        <Col
          md={12}
          style={{
            justifyContent: "center",
            paddingBottom: "30px",
          }}
        >
          <h1
            style={{
              fontSize: "2.1em",
              paddingBottom: "20px",
              textAlign: "center",
            }}
          >
            <strong style={{ color: "#fff" }}>Contact</strong>{" "}
            <strong className="purple">Me</strong>
          </h1>
        </Col>
      </Row>
      <Row>
        <Col
          md={6}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Row>
            <h1
              style={{ fontSize: "30px", textAlign: "center", color: "#fff" }}
            >
              Want to get in touch? Contact on any platform!
            </h1>
          </Row>
          <Row style={{ textAlign: "center" }}>
            <ul className="footer-icons">
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/arnav-ranjan/"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/arnav1507"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.instagram.com/arnavr15/"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/profile.php?id=100011387998712"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/arnav_ranjan_15"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
            </ul>
          </Row>

          <Row style={{ marginTop: "0px" }}>
            <ResumeNew />
          </Row>
        </Col>
        <Col
          md={6}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Contact />
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
