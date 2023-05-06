import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import ScrollDown  from "../scroll-down/ScrollDown";
import "./carousal.css";

const CustomCarousel = () => {
    return (
        <div id="home">
            <Carousel controls={false} indicators interval={2500} pause={false}>
                <Carousel.Item>
                    <img className="d-block w-100 custom-img "alt="First slide"/>
                </Carousel.Item>
            </Carousel>
            <ScrollDown/>
        </div>
    )
}

export default CustomCarousel