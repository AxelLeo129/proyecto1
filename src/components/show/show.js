import React from "react";
import "./show.scss";

const Show = (props) => {
  return (
    <React.Fragment>
      <div className="back--dark--2">
        <img
          src={props.img}
          width="100%"
          height="75%"
          className="animate__animated animate__fadeIn"
        />
        <div
          className="animate__animated animate__fadeInUp slider--global"
          style={{ top: "-75%" }}
        >
          <img src={props.logo} width="50%" height="50%" />
          <p>
            {props.desc}
          </p>
          <button type="button" className="btn btn-light slider--button">
            {props.button}
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Show;
