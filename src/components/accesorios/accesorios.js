import React, { useState } from "react";
import "./accesorios.scss";
import ps5 from "../../assets/ps5.png";
import dualsense from "../../assets/dualsense.png";
import pulse3d from "../../assets/pulse3d.png";
import media_remote from "../../assets/media_remote.png";
import hd_camera from "../../assets/hd_camera.png";
import ps5_covers from "../../assets/ps5_covers.png";
import { accesories_slider } from "../utilities/constants";

const Accesorios = (props) => {
  const [slider, setSlider] = useState(accesories_slider[0]);
  const [cards, setCards] = useState([
    {
      id: 1,
      name: "PS5 Console",
      img: ps5,
      selected_class: "card--size--selected--1",
    },
    {
      id: 2,
      name: "DualSense™ Wireless Controller",
      img: dualsense,
      selected_class: "",
    },
    {
      id: 3,
      name: "PULSE 3D™ Wireless Headset",
      img: pulse3d,
      selected_class: "",
    },
    {
      id: 4,
      name: "Media Remote",
      img: media_remote,
      selected_class: "",
    },
    {
      id: 5,
      name: "HD Camera",
      img: hd_camera,
      selected_class: "",
    },
    {
      id: 6,
      name: "PS5 Console Covers",
      img: ps5_covers,
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
      setSlider(accesories_slider.find((e) => e.id == id));
    }, 500);
  };

  return (
    <React.Fragment>
      <div className="back--white d-flex align-items-center">
        {slider ? <div className="row d-flex align-items-center animate__animated animate__fadeIn">
          <div className="col-6 d-flex align-items-start flex-direction-column">
            <div className="ml--55">
              <h3>{slider.title}</h3>
              <p>{slider.text}</p>
              <button type="button" className="btn btn-primary slider--button">
                Learn more
              </button>
            </div>
          </div>
          <div className="col-6">
            <img width="90%" src={slider.banner} />
          </div>
        </div> : null}
      </div>
      <div className="row mt-4">
        <div className="col-12 d-flex justify-content-center">
          {cards.map((e, index) => (
            <div
              key={index}
              onClick={() => selectSlider(e.id)}
              className={`card--size--2 d-flex justify-content-center align-items-center text-center animate__animated animate__fadeIn ${e.selected_class}`}
            >
              <img
                className="card--img--1"
                width="50%"
                height="50%"
                src={e.img}
                alt="Card image cap"
              />
              <p>{e.name}</p>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Accesorios;
