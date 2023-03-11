import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Tilt from 'react-parallax-tilt';
import "./Project.css";

import img1 from "../../assets/img/carousal/slide1.png";
import img2 from "../../assets/img/carousal/slide2.png";
import img3 from "../../assets/img/carousal/slide3.png";

const Project = () => {
    return (
        <div id="project" className="project">
            <Container>
            <br/>
            <h1 className="artwork text-center font-details-b pb-4">Project Artwork</h1>
                <CardDeck>
                    <Tilt >
                        <Card className="card-resize">
                            <Card.Img className="image-resize" variant="top" src={img1} alt="Artwork 1" />
                        </Card>
                    </Tilt>
                    <Tilt >
                        <Card className="card-resize">
                            <Card.Img className="image-resize" variant="top" src={img2} alt="Artwork 2" />
                        </Card>
                    </Tilt>
                    <Tilt>
                        <Card className="card-resize">
                            <Card.Img className="image-resize" variant="top" src={img3} alt="Artwork 3" />
                        </Card>
                    </Tilt>
                </CardDeck>

            </Container>
        </div>
    )
}
export default Project