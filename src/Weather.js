import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="container mt-1">
      <div className="row mt-3">
        <form></form>
        <div className="col-sm-9">
          {" "}
          <input
            type="search"
            placeholder="Enter your city here.."
            className="form-control"
          />{" "}
        </div>
        <div className="col-sm-3">
          <input type="submit" value="Search" className="btn btn-primary" />
        </div>
      </div>
      <div className="update">
        <ul>
          <li>
            Last updated on{" "}
            <span>
              <h4 className="day">Tuesday 18:20</h4>
            </span>
            <span>Partly cloudy</span>
          </li>
        </ul>
      </div>
      <div className="row">
        <div className="col-sm-2">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="partly cloudy"
            className="img-fluid"
          />
        </div>
        <div className="col-sm-4">
          {" "}
          <div className="currentTemp">20 °C</div>
        </div>
        <div className="col-sm-6">
          <ul>
            <li>
              Precipitation <span>10%</span>
            </li>
            <li>
              Humidity <span>10%</span>
            </li>
            <li>
              Wind <span>15 Km/H</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
