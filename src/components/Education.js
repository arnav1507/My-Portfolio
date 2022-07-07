import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaGraduationCap, FaSchool } from "react-icons/fa";
import { GiSchoolBag } from "react-icons/gi";
import "./Education.css";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "./Particle";

function Education() {
  return (
    <Container
      fluid
      style={{ marginTop: "70px", marginBottom: "70px" }}
      id="education"
    >
      <Particle />
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
            <strong style={{ color: "#fff" }}>Education</strong>
          </h1>
        </Col>
      </Row>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work textAlignmentLeft "
          contentStyle={{
            backgroundColor: "inherit",
            border: "1.7px solid rgba(200, 137, 230, 0.637)",
            color: "#fff",
            opacity: "0.93",
          }}
          contentArrowStyle={{ borderRight: "#c770f0" }}
          date="2019 - present"
          iconStyle={{ background: "#c770f0", color: "#fff" }}
          icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title">
            B Tech, Computer Science and Engineering
          </h3>
          <br />
          <h4 className="vertical-timeline-element-subtitle">
            National Institute of Technology, Patna
          </h4>
          <p>CGPA : 8.75</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work textAlignmentRight"
          contentStyle={{
            backgroundColor: "inherit",
            border: "1.7px solid rgba(200, 137, 230, 0.637)",
            color: "#fff",
            opacity: "0.93",
          }}
          contentArrowStyle={{ borderRight: "#c770f0" }}
          date="2016 - 2018"
          iconStyle={{ background: "#c770f0", color: "#fff" }}
          icon={<FaSchool />}
        >
          <h3 className="vertical-timeline-element-title">
            Senior Secondary, Science (CBSE)
          </h3>
          <br />
          <h4 className="vertical-timeline-element-subtitle">
            Sri Chaitanya Techno School
          </h4>
          <p>Percentage: 91.4</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work textAlignmentLeft"
          contentStyle={{
            backgroundColor: "inherit",
            border: "1.7px solid rgba(200, 137, 230, 0.637)",
            color: "#fff",
            opacity: "0.93",
          }}
          contentArrowStyle={{ borderRight: "#c770f0" }}
          date="2003 - 2016"
          iconStyle={{ background: "#c770f0", color: "#fff" }}
          icon={<GiSchoolBag />}
        >
          <h3 className="vertical-timeline-element-title">Secondary (CBSE) </h3>
          <br />
          <h4 className="vertical-timeline-element-subtitle">
            D.A.V Public School
          </h4>
          <p>CGPA : 10</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Container>
  );
}

export default Education;
