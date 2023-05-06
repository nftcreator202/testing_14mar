import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Project.css";

const Project = () => {
    return (
        <div id="tokenomics" className="project">
                    <Container className="object-flex">
                      <Row className=" pb-5 align-items-center">
                        <Col xs={12} md={6}>
                          <Row className=" align-items-left p-2 my-details rounded tex align-text-left " >
                          <label for="file">Presale : 55% </label>
                          <progress id="file" max="100" value="55"> 55% </progress>
                        <br/>

                        <label for="file">Liquidity Pool : 33%</label>
                        <progress id="file" max="100" value="33"> 33% </progress>

                        <br/>
                        <label for="file">Airdrop : 2%</label>
                        <progress id="file" max="100" value="2"> 2% </progress>

                        <br/>
                        <label for="file">Team : 5%</label>
                        <progress id="file" max="100" value="5"> 5% </progress>
                        <br/>
                        <label for="file">Meth (marketing) expenses : 5%</label>
                        <progress id="file" max="100" value="5"> 5% </progress>

                         </Row>
                         </Col>

                        <Col xs={12} md={6}>
                          <Row className=" align-items-start p-2 rounded tex align-text-center " >
                          <div className=" my-details">
                          Supply:
                          <br/>
                          The total unlocked supply is 89B $METH.

                           <br/><br/>

                           Community:
                           <br/>
                           The community will purchase 55% of the total supply during the presale.
                           <br/>
                           To help avoid unfair token distribution we have capped
                            <br/>
                            the contribution amount at 0.5 Ξ per address


                            <br/><br/>
                           Presale:
                           <br/>
                           The softcap will be 10 Ξ, the hardcap will be 30 Ξ
                             <br/><br/>


                            Presale Price:
                            <br/>
                            1 ETH -> 489,500,000 METH
                            <br/>
                            Min buy 0.05 Ξ
                            <br/>
                            Max Buy 0.5 Ξ
                          </div>
                            </Row>
                         </Col>

                      </Row>
                    </Container>
                </div>


    )
}
export default Project