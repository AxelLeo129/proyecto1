import React from "react";
import elder_ring_logo from "../../assets/elder-ring-logo.png";
import elder_ring from "../../assets/elden-ring.webp";

const ElderRing = (props) => {
  return (
    <React.Fragment>
      <div className="back--dark">
        <img
          src={elder_ring}
          width="100%"
          height="100%"
          className="animate__animated animate__fadeIn"
        />
        <div
          className="animate__animated animate__fadeInUp slider--global"
          style={{ top: "335%" }}
        >
          <img src={elder_ring_logo} width="50%" height="50%" />
          <h3>Become the Elden Lord</h3>
          <p>
            Rise, Tarnished, and be guided by grace to brandish the power of the
            Elden Ring, in the new action RPG from the creators of Dark Souls
            and Bloodborne
          </p>
          <button type="button" className="btn btn-light slider--button">
            Find out more
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ElderRing;
