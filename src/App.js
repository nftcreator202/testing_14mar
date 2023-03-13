import React from "react";
import "./App.css";
import NavBar from "./components/navBar/NavBar";
import CustomCarousel from "./components/carousel/Carousal";
import TitleMessage from "./components/title-message/TitleMessage";
import About from "./views/about/About";
import { Parallax } from "react-parallax";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Container from "react-bootstrap/Container";
import Project from "./views/project/Project";
import Mint from "./views/mint/Mint";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App" style={{ position: "relative" }}>
      <NavBar />
      <CustomCarousel />
      <TitleMessage />
      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/background.webp")}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade left duration={2000}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
      <div>

        <div>
          <Container className="container-box rounded">
            <Slide left duration={2000}>
              <hr />
              <Project />
            </Slide>
          </Container>
        </div>

       <div>
        <Container className="container-box rounded">
          <Slide left duration={2000}>
            <hr />
            <Mint/>
          </Slide>
        </Container>
      </div>
      </div>
      <hr />
      <Footer />
    </div>
  );
}

export default App;
