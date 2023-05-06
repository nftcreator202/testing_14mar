import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Project.css";

const Project = () => {
    return (
        <div id="project" className="project">
                    <Container className="object-flex">
                      <Row className=" pb-5 align-items-center">
                        <Col xs={12} md={6}>
                          <Row className=" align-items-start p-2 my-details rounded tex align-text-left " >

                          Well it's obvious why you've landed up here. Be HONEST with yourself.
                          <br/>
                          <br/>

                          You're here hoping that your small broke-boy investment in $METH will be the next token to x100.

                          <br/><br/>

                          Well there's only one thing better than a gambler; a gambler who's also a drug addict.

                          <br/><br/>

                          Our motto is, gamble, do drugs and, well... lose more money.

                          <br/><br/>

                          You can't run your balance to 0 without investing in $METH, so hurry up.
                            </Row>
                         </Col>

                        <Col xs={12} md={6}>
                          <Row className=" align-items-start p-2 my-details rounded tex align-text-left " >
                          PHASE 1:
                          <ul>
                          <li>Launch Presale</li>
                          <li>Link early members with our dealer contacts</li>
                          <li>Go live/launch</li>
                          <li>Get Walter to see $METH trending on twitter</li>
                          </ul>

                          PHASE 2:
                          <ul>
                          <li>Real Marketing Push</li>
                          <li>Get listed on CoinMarketcap and CoinGecko</li>
                          <li>Reach 2,000 + holders</li>
                          <li>Go buy crystal with your stupid, big profits</li>
                          </ul>

                          PHASE 3:
                          <ul>
                          <li>Reach 10,000 + holders</li>
                          <li>Get listed on CEXs</li>
                          <li>Huge Giveaways</li>
                          <li>Ride it all the way to valhalla, I mean the caravan (crystal was talking)...</li>
                          </ul>
                            </Row>
                         </Col>

                      </Row>
                    </Container>
                </div>


    )
}
export default Project