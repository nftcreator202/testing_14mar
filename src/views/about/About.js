import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.css";
import Profile from "../../assets/img/profile/profile.png";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-2">ABOUT ME</h1>
        <Container className="object-flex">
          <Row className=" pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="profile justify-content-end" alt="profile" src={Profile} />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded tex align-text-left " >
                <br /> I spent my childhood filling notebooks with sketches of the world around me.
                <br/><br/>
                I  discovered the world of street art at a young age, and was immediately captivated by the bold,
                colorful murals that covered the walls of the city's buildings.
                <br/><br/>
                As my first step in Web3, I decided to create a series of digital murals that would capture the
                spirit of the city that had inspired me.
                <br />
                </Row>
                </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;