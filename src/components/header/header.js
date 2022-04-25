import React from "react";
import "./header.scss";
import sony_logo from "../../assets/sony_logo.svg";
import playstation_logo from "../../assets/playstation_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faSearch,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { header_options } from "../utilities/constants";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listado: [],
      li: [],
      mostrar: false,
      selected: "",
      header_select: [
        {
          name: "Games",
          icon: faChevronDown,
        },
        {
          name: "Hardware",
          icon: faChevronDown,
        },
        {
          name: "Services",
          icon: faChevronDown,
        },
        {
          name: "News",
          icon: faChevronDown,
        },
        {
          name: "Shop",
          icon: faChevronDown,
        },
        {
          name: "Support",
          icon: faChevronDown,
        },
      ],
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        document.getElementById("navbar_top").classList.add("fixed-top");
        navbar_height = document.querySelector(".navbar").offsetHeight;
        document.body.style.paddingTop = navbar_height + "px";
      } else {
        document.getElementById("navbar_top").classList.remove("fixed-top");
        document.body.style.paddingTop = "0";
      }
    });
  }

  selectMenu(tipo) {
    const header_select_copy = [...this.state.header_select];
    header_select_copy.forEach((e) => (e.icon = faChevronDown));
    if (this.state.selected == tipo) {
      this.setState({
        listado: [],
        li: [],
        selected: "",
        header_select: header_select_copy,
        mostrar: false,
      });
    } else {
      const new_list = header_options.find((e) => e.name == tipo);
      const index = header_select_copy.findIndex((e) => e.name == tipo);
      header_select_copy[index].icon = faChevronUp;
      this.setState(
        {
          listado: [],
          li: [],
          selected: tipo,
        },
        () => {
          this.setState({
            listado: new_list.cards,
            li: new_list.li,
            mostrar: true,
            header_select: header_select_copy,
          });
        }
      );
    }
  }

  render() {
    return (
      <React.Fragment>
        <nav className="bg-dark text--right">
          <a className="mr--5">
            <img src={sony_logo} width="5%" height="5%" alt="" />
          </a>
        </nav>
        <nav id="navbar_top" className="bg-light">
          <div className="row">
            <div className="col-6">
              <a className="navbar-brand" href="#">
                <img className="ps--logo" src={playstation_logo} />
              </a>
              {this.state.header_select.map((e, index) => (
                <span
                  key={index}
                  onClick={() => this.selectMenu(e.name)}
                  className="span--header"
                >
                  {e.name} <FontAwesomeIcon size="sm" icon={e.icon} />
                </span>
              ))}
            </div>
            <div className="col-6 d-flex justify-content-end">
              <label className="btn btn-secondary sign--in">
                <span>Sign In</span>
              </label>
              <FontAwesomeIcon
                style={{ margin: "10px" }}
                size="lg"
                icon={faSearch}
              />
            </div>
          </div>
          {this.state.mostrar ? (
            <React.Fragment>
              <div
                className="animate__animated animate__fadeInDown"
                style={{ backgroundColor: "white" }}
              >
                <div className="row">
                  <div className="col-12 d-flex justify-content-center">
                    {this.state.listado.map((e, index) => (
                      <div
                        key={index}
                        className="card--size d-flex align-items-center animate__animated animate__fadeIn"
                      >
                        <img width="40%" src={e.img} alt="Card image cap" />
                        <div className="card-body">
                          <p className="card-text">{e.title}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {this.state.li.length > 0 ? (
                  <React.Fragment>
                    <hr />
                    <div className="row">
                      <div className="col-12 d-flex justify-content-center">
                        <ul>
                          {this.state.li.map((f, index1) => (
                            <li
                              key={index1}
                              className="animate__animated animate__fadeIn"
                            >
                              <a>{f}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </React.Fragment>
                ) : null}
              </div>
            </React.Fragment>
          ) : null}
        </nav>
      </React.Fragment>
    );
  }
}

export default Header;
