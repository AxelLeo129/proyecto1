import React from "react";
import "./month.scss";
import mlb from "../../assets/mlb-the-show-22.webp";
import cover_3 from '../../assets/cover-3.jpg';
import mlb_cover_2 from '../../assets/mlb-cover-2.jpg';
import plastation_movies from '../../assets/playstation-movies-cover.jpg';

const Month = (props) => {
  return (
    <React.Fragment>
      <div style={{backgroundImage: "url(" + mlb + ")", backgroundRepeat: "no-repeat"}}>
        <div className="row">
          <div className="col-6">
            <div className="ml--55 text-light mt--9 text--middle">
              <h2>THIS MONTH ON PLAYSTATION</h2>
              <p>
                Check out this month's biggest releases along with dedicated
                features, guides and more.
              </p>
              <button type="button" className="btn btn-light slider--button">
                Find out more
              </button>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12 d-flex justify-content-center">
            <div className="mb">
              <img src={mlb_cover_2} className="img--div"/>
              <p>How Shohei Ohtani changed baseball and MLB The Show</p>
              <button type="button" className="btn btn-light slider--button">
                Find out more
              </button>
            </div>
            <div className="mb">
              <img src={plastation_movies} className="img--div"/>
              <p>PlayStation goes to the movies</p>
              <button type="button" className="btn btn-light slider--button">
                Find out more
              </button>
            </div>
            <div className="mb">
              <img src={cover_3} className="img--div"/>
              <p>Creator Stories: The Making of Returnal's Selene Vassos</p>
              <button type="button" className="btn btn-light slider--button">
                Find out more
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Month;
