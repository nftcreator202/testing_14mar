import React from "react";
import styled from "styled-components";

const MyTitleMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 22rem;
  z-index: 1;
  margin-top: -225px;
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

    .links {
        margin-top:100px;
    }
  }
  @media only screen and (max-width: 786px){
      strong {
        font-size: 1em;
      }
      soft {
        font-size: 7px;
      }
      div {
        font-weight: 200;
        .main {
          padding-left: 150px;
          font-size: 15px;
        }
        .links {
          margin-top: 50px;
        }

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
            <div className="links">
            <a  href="https://etherscan.io/address/0x0086dbcf0c26cec3e3366bcdd1edd4acb6b02a5c" target="_blank" rel="noopener noreferrer" >
              <button  class="connect-button">Contract</button>
            </a>

            <a  href="http://twitter.com/meth_coin" target="_blank" rel="noopener noreferrer" >
              <button  class="connect-button">Twitter</button>
            </a>
            <a  href="https://www.pinksale.finance/launchpad/0xC9Cc3F88A87995521D1A439eB242a678e40E97f3?chain=ETH" target="_blank" rel="noopener noreferrer" >
              <button  class="connect-button">Presale</button>
            </a>
            </div>
          </div>
          <br/>

        </div>
      </div>
    </MyTitleMessage>
  );
  
  export default TitleMessage;
  