import React from "react";
import Typewriter from "typewriter-effect";
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
  div {
    color: ${props => props.theme.titleColor};
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: 500;
    .main {
      font-size: 60px;
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
            Welcome to
            <br />
            <span>
              <strong>METH</strong>

            </span>
          </div>
          <br/>

        </div>
      </div>
    </MyTitleMessage>
  );
  
  export default TitleMessage;
  