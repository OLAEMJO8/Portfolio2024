import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,

} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Me presento<span className="purple"> </span> 
            </h1>
            <p className="home-about-body">
            Como artista y desarrolladora web, me dedico a fusionar mi creatividad con la tecnología para crear, adaptarme y aprender tanto en el escenario como en el mundo digital.
              <br />
              <br /> En mi experiencia me ha gustado trabajar mas en frontend con
              <i>
                <b className="purple"> React y Vue. </b>
              </i>
              <br />
              <br />
              Me interesa seguir aprendiendo sobre el uso de distintos frameworks.
              <i> Y mejorar mi CSS 😅
               
              </i>
              <br />
              <br />
             Disfruto mucho del trabajo en equipo y de aprender de mis compañeros, tener un buen ambiente de trabajo hace que el trabajo deje de ser trabajo. <b className="purple">Espero seguir rodeandome de personas que me inspiren a mejorar y aprender</b> 
            
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Conectemos</h1>
           
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/OLAEMJO8"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mjolaechea/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
          
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
