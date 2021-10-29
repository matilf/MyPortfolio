import "./intro.scss";

import { useEffect, useRef } from "react";

export default function Intro() {
  return( 
    <div className="intro" id="intro">
    <div className="left">
      <div className="imgContainer">
      <img src='https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortWaved&accessoriesType=Prescription02&hairColor=Brown&facialHairType=Blank&clotheType=Hoodie&clotheColor=Heather&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Smile&skinColor=Pale'
/>
       
      </div>
    </div>
    <div className="right">
      <div className="wrapper">
        <h2>Hi There, I'm</h2>
        <h1>Matias Lopez Ferrando</h1>
        <h3>
          React <span>Web Developer</span>
        </h3>
      </div>
      <a href="#about">
        <img src="assets/down.png" alt="" />
      </a>
    </div>
  </div>
);
}
