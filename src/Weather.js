import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState(props.defaultCity);

  function showTemperature(response) {
    console.log(response);
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
      temperature: Math.round(response.data.main.data.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }
  function handleSubmit(event) {
    event.preventDeafault();
  }
  function searchInput(event) {
    setCity(event.target.value);
  }

  const apiKey = `2ca73ec094788f6655563078c6d08278`;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(url).then(showTemperature);

  if (weatherData) {
    return (
      <div>
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
                <h4 className="day">{weatherData.date}</h4>
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
