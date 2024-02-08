import React from "react";
import Card from "react-bootstrap/Card";
import { FaRegHeart } from "react-icons/fa";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hola hola! Soy <span className="purple">Maria Jose Olaechea </span>
            actualmente vivo en{" "}
            <span className="purple"> Tandil, Argentina.</span>
            <p>
              <br /> 
            </p>
            Aparte del codigo me gusta:
          </p>
          <ul>
            <li className="about-activity">
              <FaRegHeart /> Ser Clown Humanitario
            </li>
            <li className="about-activity">
              <FaRegHeart /> Pintar
            </li>
            <li className="about-activity">
              <FaRegHeart /> Leer y escribir
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Ponele corazon a todo lo que hagas!"{" "}
          </p>
          <footer className="blockquote-footer">Majo</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
