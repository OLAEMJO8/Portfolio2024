import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import profinder from "../../Assets/Projects/profinder.png";

import porfolio from "../../Assets/Projects/porfolio.png";
import vue from "../../Assets/Projects/vue.png";
import driver from "../../Assets/Projects/driver.png";
import tecnica from "../../Assets/Projects/tecnica.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mis <strong className="purple">Proyectos</strong>
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vue}
              isBlog={false}
              title="Vue"
              description="Aprendiendo Vue.js, el ciclo de vida de un componente, estados,eventos, directivas, componentes, rutas, etc."
              ghLink="https://github.com/OLAEMJO8/primervue.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tecnica}
              isBlog={false}
              title="Prueba Tecnica"
              description=" El objetivo de la siguiente prueba fue medir la capacidad de análisis, y competencias de desarrollo de
              software y experiencia de usuario utilizando React y TailwindCss para estilado. Desarrolle el backend de la solución en forma de un API REST utilizando Node."
              ghLink="https://github.com/OLAEMJO8/prueba_tecnica.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={porfolio}
              isBlog={false}
              title="Mi primer Portfolio"
              description=" Este portafolio cuenta un poco de mi, mis skills, mis
              proyectos y podras ver un poco de mi ultimo trabajo
              actualmente."
              ghLink="https://github.com/OLAEMJO8/Portafolio"
              demoLink="https://mariajoseolaechea.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={profinder}
              isBlog={false}
              title="Profinder"
              description=" Profinder es una plataforma innovadora que permite a los
              usuarios prestadores de servicios publicar sus servicios y
              ofrecerlos dentro de diversas categorías en diferentes zonas
              de Latinoamérica."
              ghLink="https://github.com/OLAEMJO8/Profinder"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={driver}
              isBlog={false}
              title="Driver"
              description="Proyecto Individual bootcamp Henry. Visualización de cards de corredores, con la posibilidad de
              filtrar, ordenarlos, buscar uno en específico a través de la
              barra de búsqueda y se podrá crear un nuevo corredor a través
              de un formulario."
              ghLink="https://github.com/OLAEMJO8/drivers"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
