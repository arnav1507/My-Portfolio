import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import cowinDash from "../../Assets/Projects/cowinDash.png";
import libDesk from "../../Assets/Projects/libDesk.png";
import muckIn from "../../Assets/Projects/muckIn.png";
import portfolio from "../../Assets/Projects/portfolio.png";
import memepoint from "../../Assets/Projects/memepoint.png";

function Projects() {
  return (
    <Container fluid className="project-section" id="projects">
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
                textAlign: "center",
              }}
            >
              <strong style={{ color: "#fff" }}>My Recent</strong>&nbsp;
              <strong className="purple">Works</strong>
            </h1>
            <p style={{ color: "white", textAlign: "center" }}>
              Here are a few projects I've worked on recently.
            </p>
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={libDesk}
              isBlog={false}
              title="Library Desk"
              description="A Library System for admins to manage the daily work and a platform for students to explore and avail membership of nearby libraries. Features like Authentication, Updating and some more features like Catalog Management, Get Notifications, etc."
              ghLink="https://github.com/Binary-Brains/lib-project"
              demoLink="https://l-backend.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cowinDash}
              isBlog={false}
              title="COWIN Dashboard"
              description="A COWIN Live Tracker Dashboard where you can see No of Confirmed, Active cases along with No of people recovered and No of deaths occured. It also displays State-wise stats of COVID cases and has features like Searching, Filtering, Pagination, Downloading as CSV or PDF"
              ghLink="https://github.com/arnav1507/Covid19Dashboard"
              demoLink="https://arnav1507.github.io/Covid19Dashboard/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="My Portfolio"
              description="My portfolio, which is nothing but this site only, it lists down all about me, my education, the skills I posses, my social media links, etc. It also has Send Mail feature for contacting me easily"
              ghLink="https://github.com/arnav1507/My-Portfolio"
              demoLink="https://arnavportfolio.herokuapp.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={memepoint}
              isBlog={false}
              title="Meme Point"
              description="A website to create and share memes with your friends and family. It has features like Create, Read, Update, Delete"
              ghLink="https://github.com/arnav1507/MemePointNew"
              demoLink="https://62dc5ea0a363655a9853141b--memepoint.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={muckIn}
              isBlog={false}
              title="NGO Donation Site - MuckIN"
              description="An NGO Donation Site which aims at connecting needy people and people wishing to donate through NGOs. People willing to donate can come and post their stuff and from there NGO volunteers can contact them and deliver it to the needy people. It has features like Create, Read, Update, Delete"
              ghLink="https://github.com/gdscnitp/ngo-donations-site"
              demoLink="https://muckin.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
