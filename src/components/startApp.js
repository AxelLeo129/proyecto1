import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import 'animate.css';
import "./startApp.scss";
import Header from "./header/header";
import PrincipalSlider from "./principalSlider/principalSlider";
import Accesorios from "./accesorios/accesorios";
import Month from "./month/month";
import ElderRing from "./elder-ring/elderRing";

class StartApp extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <PrincipalSlider />
        <Accesorios />
        <Month />
        <ElderRing />
      </React.Fragment>
    );
  }
}

export default StartApp;
