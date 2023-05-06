import React from "react";
import styled from "styled-components";

const MyTitleMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 22rem;
  z-index: 1;
  margin-top: -125px;
  text-align: center;
  strong {
    font-size: 1.25em;
  }
  soft {
    font-size: 17px;
  }
  div {
    color: ${props => props.theme.titleColor};

    font-weight: 500;
    .main {
      padding-left: 300px;
      font-size: 40px;
      font-weight:bold;
    }
    .sub {
      font-size: 47px;
      letter-spacing: 2px;
    }
  }
`;

const TitleMessage = () => (
    <MyTitleMessage>
      <div className="titleMessage">
        <div className="heading">
          <div className="main text-center mb-3">
            Well
            <br/>
            hello there,
            <br />
            this is
            <br/>

            <span>
              <strong>$METH</strong>
            </span>
            <br/>

            <span> <soft>
             &nbsp;  &nbsp; "You're An Insane, Degenerate Piece Of Filth, And You Deserve To Die" - Walter White
            </soft></span>
            <br/>
            <br/>
            <a  href="http://etherscan.io">
              <button  class="connect-button">Contract</button>
            </a>
            <a  href="http://twitter.com/meth_coin">
              <button  class="connect-button">Twitter</button>
            </a>
            <a  href="http://pinksale.finance">
              <button  class="connect-button">Presale</button>
            </a>

          </div>
          <br/>

        </div>
      </div>
    </MyTitleMessage>
  );
  
  export default TitleMessage;
  