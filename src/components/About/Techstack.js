import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
} from "react-icons/di";
import { SiFirebase, SiExpress } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt, FaBootstrap } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
        <h4>Cpp</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiFillHtml5 />
        <h4>HTML</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCss3Alt />
        <h4>CSS</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h4>JavaScript</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaBootstrap />
        <h4>Bootstrap</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h4>React & React Native</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <h4>NodeJS</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
        <h4>ExpressJS</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <h4>MongoDB</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <h4>Git & Github</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <h4>Firebase</h4>
      </Col>
    </Row>
  );
}

export default Techstack;
