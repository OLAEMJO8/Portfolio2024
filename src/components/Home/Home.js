import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.png";
import Particle from "../Particle";
import Home2 from "./Home2";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading-name">
                Hola a todos,
                {/* <span className="wave" role="img" aria-labelledby="wave">
                ,
                </span> {" "} */}
            
            {" "}
                soy
                <strong className="main-name"> Majo</strong>
                <div className="focus-in-contract" style={{ marginTop:20 }}>
                  <h2> Desarrolladora Front End</h2>
                </div>
                <div className="focus-in-contract">
                  <h2 className="main-name"> Artista</h2>
                </div>
              </h1>


             
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "400px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
