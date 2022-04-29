import React, { useState } from "react";
import "./products.scss";
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Products = (props) => {
  const [products1, setProducts1] = useState(props.products[0]);
  const [dot_selected, setDotSelected] = useState(0);

  const selectProducts = (dot) => {
    let validate = true;
    if(dot_selected == 0) {
      if(dot < dot_selected) {
        validate = false;
      }
    }
    if(dot_selected == 2) {
      if(dot > dot_selected) {
        validate = false;
      }
    }
    if (validate) {
      setProducts1([]);
      setTimeout(() => {
        setProducts1(props.products[dot]);
        setDotSelected(dot);
      }, 100);
    }
  };

  return (
    <React.Fragment>
      <div className="back--dark--1">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="m-5 text-light">
                <h3>{props.title}</h3>
                <h5>{props.desc}</h5>
              </div>
            </div>
            <div className="col-6 ">
              <div className="m-5 flex--1">
                <div className="mr--150">
                  <span
                    className={`dot ${
                      dot_selected == 0 ? "dot--selected" : null
                    }`}
                    dot--selected
                    onClick={() => selectProducts(0)}
                  ></span>
                  <span
                    className={`dot ${
                      dot_selected == 1 ? "dot--selected" : null
                    }`}
                    onClick={() => selectProducts(1)}
                  ></span>
                  <span
                    className={`dot ${
                      dot_selected == 2 ? "dot--selected" : null
                    }`}
                    onClick={() => selectProducts(2)}
                  ></span>
                </div>
                <div className="mr--15">
                  <FontAwesomeIcon
                    onClick={() => selectProducts(dot_selected - 1)}
                    color="white"
                    style={{ fontSize: "30px", margin: "5px" }}
                    icon={faChevronCircleLeft}
                  />
                  <FontAwesomeIcon
                    onClick={() => selectProducts(dot_selected + 1)}
                    style={{ fontSize: "30px", margin: "5px" }}
                    color="white"
                    icon={faChevronCircleRight}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-12"
              style={{ display: "flex", marginLeft: "25px" }}
            >
              {products1.map((e, i) => (
                <div
                  key={i}
                  className="card--size--2 d-flex align-items-center animate__animated animate__fadeIn"
                >
                  <img
                    src={e.img}
                    alt="Card image cap"
                    style={{
                      minHeight: "200px",
                      minWidth: "200px",
                      maxHeight: "200px",
                      maxWidth: "200px",
                    }}
                    className="zoom"
                  />
                  <div className="card-body">
                    <p className="card-text text-light">{e.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Products;
