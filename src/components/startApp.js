import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import 'animate.css';
import "./startApp.scss";
import Header from "./header/header";
import PrincipalSlider from "./principalSlider/principalSlider";
import Accesorios from "./accesorios/accesorios";

class StartApp extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <PrincipalSlider />
        <Accesorios />
      </React.Fragment>
    );
  }
}

export default StartApp;
