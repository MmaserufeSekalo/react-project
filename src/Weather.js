import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function showTemperature(response) {
    console.log(response.data);

    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.data.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }
  function handleSubmit(event) {
    event.preventDeafault();
    search();
  }
  function searchInput(event) {
    event.preventDeafault();
    setCity(event.target.value);
  }

  function search() {
    const apiKey = `2ca73ec094788f6655563078c6d08278`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showTemperature);
  }

  if (weatherData.ready) {
    return (
      <div className="container mt-1">
        <div className="row mt-3">
          <form onSubmit={handleSubmit}>
            <div className="col-sm-9">
              {" "}
              <input
                type="search"
                placeholder="Enter your city here.."
                onChange={searchInput}
                className="form-control"
              />{" "}
            </div>
            <div className="col-sm-3">
              <input type="submit" value="Search" className="btn btn-primary" />
            </div>
          </form>
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
              <span className="text-capitalize">{weatherData.description}</span>
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
  } else {
    return <h1>Loading.....</h1>;
  }
}
