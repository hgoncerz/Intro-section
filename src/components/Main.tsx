import React from "react";

import imgMain from "../images/image1.png";
import "../scss/main/main.scss";

const Main: React.FC = () => {
  return (
    <main className="wrap">
      <div className="wrap__container">
        <div className="wrap__container__text">
          <h1>
            Make <br /> remote work
          </h1>
          <p>
            Get your team in sync, no matter your location.
            <br />
            Streamline processes, create team rituals, and <br />
            watch productivity soar.
          </p>

          <button>Learn more</button>
        </div>
        <div className="wrap__container__image">
          <img src={imgMain} alt="hero-image" />
        </div>
      </div>
    </main>
  );
};

export default Main;
