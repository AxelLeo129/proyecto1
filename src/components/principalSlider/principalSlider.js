import React, { useState } from "react";
import "./PrincipalSlider.scss";
import mlb_cover from "../../assets/mlb-the-show-22-cover.jpg";
import lego_cover from "../../assets/lego-star-wars-cover.jpg";
import horizon_cover from "../../assets/horizon-forbidden-west-cover.jpg";
import gran_turismo_cover from "../../assets/gran-turismo-7-cover.jpg";
import ghostwire_cover from "../../assets/ghostwire-tokyo-cover.jpg";
import { principal_sliders } from "../utilities/constants";

const PrincipalSlider = (props) => {
  const [slider, setSlider] = useState(principal_sliders[0]);
  const [cards, setCards] = useState([
    {
      id: 1,
      name: "mlb",
      img: mlb_cover,
      selected_class: "card--size--selected",
    },
    {
      id: 2,
      name: "lego",
      img: lego_cover,
      selected_class: "",
    },
    {
      id: 3,
      name: "horizon",
      img: horizon_cover,
      selected_class: "",
    },
    {
      id: 4,
      name: "gran_turismo",
      img: gran_turismo_cover,
      selected_class: "",
    },
    {
      id: 5,
      name: "ghostwire",
      img: ghostwire_cover,
      selected_class: "",
    },
  ]);

  const selectSlider = (id) => {
    const cards_copy = [...cards];
    cards_copy.forEach((e) => (e.selected_class = ""));
    const index = cards_copy.findIndex((e) => e.id == id);
    cards_copy[index].selected_class = "card--size--selected";
    setCards(cards_copy);
    setSlider(null);
    setTimeout(() => {
      setSlider(principal_sliders.find((e) => e.id == id));
    }, 500);
  };

  return (
    <React.Fragment>
      <div className="back--dark">
        {slider ? (
          <React.Fragment>
            <img
              src={slider.banner}
              width="100%"
              height="100%"
              className="animate__animated animate__fadeIn"
            />
            <div className="animate__animated animate__fadeInUp slider--global" style={{top: slider.top}}>
              <img src={slider.logo} width="50%" height="50%" />
              <h3>{slider.title}</h3>
              <p>{slider.text}</p>
              <button type="button" className="btn btn-light slider--button">
                Find out more
              </button>
            </div>
          </React.Fragment>
        ) : null}
      </div>
      <div className="row mt-4">
        <div className="col-12 d-flex justify-content-center">
          {cards.map((e, index) => (
            <div
              key={index}
              onClick={() => selectSlider(e.id)}
              style={{cursor: 'pointer'}}
              className={`card--size--1 d-flex justify-content-center align-items-center animate__animated animate__fadeIn ${e.selected_class}`}
            >
              <img
                className="card--img"
                width="95%"
                height="95%"
                src={e.img}
                alt="Card image cap"
              />
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default PrincipalSlider;
