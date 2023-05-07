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
                          <Row className=" align-items-start p-2 rounded tex align-text-center " >
                          <div className=" my-details">
                          Supply:
                          <br/>
                          The total unlocked supply is 30B $METH.

                           <br/><br/>

                           Community:
                           <br/>
                           The community will purchase 60% of the total supply during the presale.
                           <br/>
                           To help avoid unfair token distribution we have capped
                            <br/>
                            the contribution amount at 0.25 Ξ per address


                            <br/><br/>
                           Presale:
                           <br/>
                           The softcap will be 10 Ξ, the hardcap will be 30 Ξ
                             <br/><br/>


                            Presale Price:
                            <br/>
                            1 ETH -> 600,000,000 $METH
                            <br/>
                            Min Buy 0.05 Ξ
                            <br/>
                            Max Buy 0.25 Ξ
                          </div>
                            </Row>
                         </Col>

                        <Col xs={12} md={6}  className="below">
                          <Row className=" align-items-start p-2 my-details rounded tex align-text-left " >
                          <label for="file">Presale : 60% </label>
                          <progress id="file" max="100" value="60"> 60% </progress>
                        <br/>

                        <label for="file">Liquidity Pool : 28%</label>
                        <progress id="file" max="100" value="28"> 28% </progress>

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
                      </Row>
                    </Container>
                </div>


    )
}
export default Project