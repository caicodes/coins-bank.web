import React from 'react'
import "./Connect.css";

import Crypto from "../assets/trade.png";


const Connect = () => {
  return (
    <div className="connect" id="connect">
      <div className="container">
        {/* Left */}
        <div className="left">
          <img src={Crypto} alt="" />
        </div>

        {/* Right */}

        
        <div className="right">
          <h2>Explore top Crypto's Like Bitcoin, Ethereum, and Dogecoin</h2>
          <p>See all available assets: Cryptocurrencies and NFT's</p>
          <button className="btn">See More Coins</button>
        </div>
      </div>
    </div>
  )
}

export default Connect