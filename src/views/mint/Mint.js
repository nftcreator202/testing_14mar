import React from "react";
import "./mint.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Mint = () => {

  return (
     <div id="map" className="mint">
                    <Container className="object-flex details">

                        <Col xs={12} md={6}>
                          <Row className=" align-items-start p-2 rounded tex align-text-center " >
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


                    </Container>
                </div>
  );
  };

  export default Mint;