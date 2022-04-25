import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import 'animate.css';
import "./startApp.scss";
import Header from "./header/header";

class StartApp extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
      </React.Fragment>
    );
  }
}

export default StartApp;
