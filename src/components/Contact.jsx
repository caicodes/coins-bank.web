import React from "react";
import "./Contact.css";

import Crypto from "../assets/trade.png";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="container">
        {/* Left */}
        <div className="left">
          <h2>Explore top Crypto's Like Bitcoin, Ethereum, and Dogecoin</h2>
          <p>See all available assets: Cryptocurrencies and NFT's</p>
          <button className="btn">See More Coins</button>
        </div>

        {/* Right */}

        <div className="right">
          <img src={Crypto} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
