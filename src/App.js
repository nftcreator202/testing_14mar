import React from "react";
import "./App.css";
import NavBar from "./components/navBar/NavBar";
import CustomCarousel from "./components/carousel/Carousal";
import TitleMessage from "./components/title-message/TitleMessage";
import About from "./views/about/About";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Container from "react-bootstrap/Container";
import Project from "./views/project/Project";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App" style={{ position: "relative" }}>
      <NavBar />
      <CustomCarousel />
      <TitleMessage />
      <div>
          <div>
            <Container className="container-box rounded">
              <Fade left duration={2000}>
                <About />
              </Fade>
            </Container>
          </div>
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
      </div>
      </div>
      <hr />
      <Footer />
    </div>
  );
}

export default App;
