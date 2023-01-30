import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function showTemperature(response) {
    console.log(response.data);

    setWeatherData({
      temperature: Math.round(response.data.main.data.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
    if (weatherData.ready) {
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
                <h3>{weatherData.city}</h3>
              </li>
              <li>
                Last updated on{" "}
                <span>
                  <h4 className="day">Tuesday 18:20</h4>
                </span>
                <span className="text-capitalize">
                  {weatherData.description}
                </span>
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
              <div className="currentTemp">{weatherData.temperature} °C</div>
            </div>
            <div className="col-sm-6">
              <ul>
                <li>Humidity {weatherData.humidity}%</li>
                <li>Wind {weatherData.wind} Km/H</li>
              </ul>
            </div>
          </div>
        </div>
      );
    }
  }
  const city = "Polokwane";
  const apiKey = `2ca73ec094788f6655563078c6d08278`;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(url).then(showTemperature);

  return (
    <ClipLoader
      color="aqua"
      loading="Fadeloader"
      cssOverride="center"
      size="10"
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
}
