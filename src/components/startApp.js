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
      </React.Fragment>
    );
  }
}

export default StartApp;
