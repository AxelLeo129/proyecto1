import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import 'animate.css';
import "./startApp.scss";
import Header from "./header/header";
import PrincipalSlider from "./principalSlider/principalSlider";

class StartApp extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <PrincipalSlider />
      </React.Fragment>
    );
  }
}

export default StartApp;
