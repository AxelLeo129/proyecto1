import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "animate.css";
import "./startApp.scss";
import Header from "./header/header";
import PrincipalSlider from "./principalSlider/principalSlider";
import Accesorios from "./accesorios/accesorios";
import Month from "./month/month";
import ElderRing from "./elder-ring/elderRing";
import Products from "./products/products";
import { products1, products2 } from "./utilities/constants";
import Explore from "./explore/explore";
import Show from "./show/show";
import plus_back from "../assets/plus-back.png";
import plus_logo from "../assets/plus-logo.png";
import now_back from "../assets/ps-now-back.png";
import now_logo from "../assets/ps-now-logo.png";

class StartApp extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <PrincipalSlider />
        <Accesorios />
        <Month />
        <ElderRing />
        <Products
          products={products1}
          title="New releases"
          desc="Great PS5 and PS4 games available now"
        />
        <Products
          products={products2}
          title="Coming soon"
          desc="Amazing new experiences are just around the corner"
        />
        <Explore />
        <Show
          img={plus_back}
          logo={plus_logo}
          desc="Enhance your PlayStation experience with access to online multiplayer, monthly games, exclusive discounts and more."
          button="Explore PlayStation Plus"
        />
        <Show
          img={now_back}
          logo={now_logo}
          desc="Gain instant access to a huge collection of more than 800 PS4, PS3 and PS2 games on PS4 or Windows PC, with new games added every month."
          button="Explore PlayStation Now"
        />
      </React.Fragment>
    );
  }
}

export default StartApp;
