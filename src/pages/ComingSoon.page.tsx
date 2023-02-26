import { Grid } from "@mui/material";
import React from "react";

import "./ComingSoon.css";
import yuHacksLogo from '../assets/yuhacks-logo.png';
// import HeroAnimation from "../components/HeroAnimation.component";
import HeroAnimation from "../components/HeroAnimation_old.component";


function ComingSoon() {
  return (
    <div className={"ComingSoonContainer"}>
      <div className={"HeroArtContainer"}>
        <div className="HeroAnimation">
          <HeroAnimation />
        </div>
      </div>
      <div className={"HeroTextContainer"}>
        <div className="HeroLogo">
          <img src={yuHacksLogo} alt="yuHacks Logo"/>
        </div>
        <div>
          <h1 className="HeroTitle">
            <span>Create, </span><br />
            <span>Connect, </span><br />
            <span className="Red">Code</span>
          </h1>
          <h4>York University | coming soon in 2023</h4>
          <p>Mailing List coming soon...</p>
        </div>
      </div>
    </div>
  );
}

export default ComingSoon;
