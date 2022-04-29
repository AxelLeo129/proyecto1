import React from "react";
import "./explore.scss";
import { explore } from "../utilities/constants";

const Explore = () => {
  return (
    <React.Fragment>
      <div className="back--white--2">
        <div className="row">
          <div className="col-12 center--1">
            <div className="center--2">
              <h2 className="text-center">Explore PlayStation®4</h2>
              <p className="p--explore">
                Incredible games, non-stop entertainment. There's never been a
                better time to enjoy PS4.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col-12"
            style={{ display: "flex", marginLeft: "25px", justifyContent: "center" }}
          >
            {explore.map((e, i) => (
              <div
                key={i}
                className="card--size--3 d-flex align-items-center animate__animated animate__fadeIn"
              >
                <img
                  src={e.img}
                  alt="Card image cap"
                  style={{
                    minHeight: "145px",
                    minWidth: "250px",
                    maxHeight: "145px",
                    maxWidth: "250px",
                  }}
                  className="zoom"
                />
                <div className="card-body">
                  <h2>{e.title}</h2>
                  <p className="card-text">{e.desc}</p>
                  <button className="btn btn-primary slider--button">Learn more</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Explore;
