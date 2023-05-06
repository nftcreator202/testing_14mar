import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.css";
import Profile from "../../assets/img/profile/dontdo.png";
import Image from "react-bootstrap/Image";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-2"></h1>
        <Container className="object-flex">
          <Row className=" pb-5 align-items-center">

            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                 <h1>THE REAL RULE IN LIFE </h1>
              </Row>
              <Row className="justify-content-center mb-2 mr-2 ">

                <Image className="profile justify-content-end" alt="profile" src={Profile} />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded tex align-text-left " >
                CRACK, CRACK, CRACK, CRACK, CRACK, CRACK, CRACK, CRACK,
                CRACK, CRACK, CRACK, CRACK, CRACK, CRACK, CRACK, CRACK,
                CRACK, CRACK, CRACK, CRACK, CRACK, CRACK, CRACK, CRACK,
                CRACK, CRACK, CRACK, CRACK, CRACK, CRACK, CRACK, CRACK,
                CRACK, CRACK, CRACK, CRACK, CRACK, CRACK, CRACK, CRACK,
                CRACK, CRACK, CRACK, CRACK, CRACK, CRACK, CRACK, CRACK,
                CRACK, CRACK, CRACK, CRACK, CRACK, CRACK, CRACK, CRACK,
                CRACK, CRACK, CRACK, CRACK, CRACK, CRACK, CRACK, CRACK,
                CRACK, CRACK, CRACK, CRACK, CRACK, CRACK, CRACK, CRACK,
                CRACK, CRACK, CRACK, CRACK, CRACK, CRACK, CRACK, CRACK,
                CRACK, CRACK, CRACK, CRACK, CRACK, CRACK, CRACK, CRACK.......
                </Row>
                </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;