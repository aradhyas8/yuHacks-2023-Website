import React from "react";

import "./ComingSoon.css";
import cardBack from "../assets/Card-Back.png";
import cardFront from "../assets/Card-Front.png";

function ComingSoon() {
  return (
    <div className={"ComingSoonContainer"}>
      <div className={"HeroArtContainer"}>
        <div className="HeroAnimation" >
          <div className="HeroCardContainer" id="back">
            <img src={cardBack} alt="Hacker ID Card Back" />
          </div>
          <div className="HeroCardContainer" id="front">
            <img src={cardFront} alt="Hacker ID Card Front" />
          </div>
        </div>
      </div>
      <div className={"HeroTextContainer"}>
        <div>
          <h1 className="HeroTitle">
            <span>Create, </span><br />
            <span>Connect, </span><br />
            <span className="Highlight">Code</span>
          </h1>
          <h4>York University | September 2023</h4>
          <div className="MailingListInput">
            <span>Mailing list opening soon...</span>
          </div>
          <p className="SponsorContactTitle">Interested in sponsoring? <a title={"Email yuHacks Team"} href={"mailto:info@yuhacks.ca"}>Contact us</a> today!</p>
        </div>
      </div>
      {/* <span className={"HeroDecorText"}>create | connect | code</span> */}
    </div>
  );
}

export default ComingSoon;
