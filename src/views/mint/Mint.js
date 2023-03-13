import React, { useContext } from "react";
import "./mint.css";
import Container from "react-bootstrap/Container";

import { Web3Context } from "../../Context/Web3Context";

const Mint = () => {

  const {
  isConnected,
  currentAccount,
  connectWallet,
  valid,
  mint,
  totalSupply

  } = useContext(Web3Context);

  return (

  <div id="mint" className = "mint">
    <Container>
    <div class="top-div">
        { !isConnected ?  (
           <button class="connect-button" onClick={connectWallet}>Connect Wallet</button>
         )  :" "}
        &nbsp; <a href = "https://etherscan.io/" class="links" rel="noopener noreferrer" target="_blank">EtherScan</a>
        <a href = "https://opensea.io/" class="links" rel="noopener noreferrer" target="_blank">OpenSea</a>
    </div>
    <div class = "text">
        MINTING SOON!
    </div>
    <br/>
    {isConnected && valid ? (
                <span className="whitelisted"> You are whitelisted! </span>
             ) : ""}
     {isConnected && !valid ? (
         <span className="notwhitelisted"> You are not whitelisted! </span>
     ) : ""}

    <div class = "mint-div">
               {isConnected && valid ? (
               <button class="mint-button" onClick={mint} >Mint</button>
                  ) : ""}
    </div>
    </Container>
  </div>
  );
  };

  export default Mint;