import React from "react";
import { Steps } from "antd";

const { Step } = Steps;

import logo from "../assets/logo_square.png";
import { APP_ABOUT } from "../constants";

function About(props) {
  return (
    <div className="container">
      <img src={logo} />
      <p className="subtitle-text">{APP_ABOUT}</p>
      <Steps current={3} status="complete">
        <Step title="Connect your wallet" description="Connect your HECO configured wallet." />
        <Step
          title="Upload your contract"
          description="Update the sample contract and deploy to either testnet or mainnet."
        />
        <Step
          title="Deploy and test"
          description="Deploy and interact with your deployed contract directly from the Hecobase UI."
        />
      </Steps>
    </div>
  );
}

export default About;
