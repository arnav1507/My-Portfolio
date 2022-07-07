import React from "react";
import Techstack from "./About/Techstack";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "./Particle";

function Skills() {
  return (
    <Container fluid className="about-section" id="skills">
      <Particle />
      <Container>
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
              <strong>Professional</strong>&nbsp;
              <strong className="purple">Skillset</strong>
            </h1>
          </Col>
        </Row>

        <Techstack />
      </Container>
    </Container>
  );
}

export default Skills;
