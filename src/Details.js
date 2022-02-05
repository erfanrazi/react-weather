import React from "react";

import "./Details.css";

export default function Details() {
  return (
    <div className="Details">
      <div className="row weather-wrap">
        <div className="col-md-6 main">
          <h1 id="city">Tehran</h1>
          <div className="image">
            <img
              src="https://openweathermap.org/img/wn/04n@2x.png"
              alt=""
              id="main-icon"
            />
          </div>
        </div>
        <div className="col-md-6 temperature">
          <h1>
            <span id="temp">9</span>
            <span className="units">°C</span>
          </h1>
          <h2 id="description">Clouds</h2>
          <ul className="Precipitations">
            <li>
              Humidity | <span id="humidityResult">41</span>%
            </li>
            <li>
              Wind | <span id="windResult">40</span>Km/h
            </li>
          </ul>
        </div>
      </div>
      <div className="date">
        Last updated: <span id="updateDate">February, 03 2022</span>
      </div>
    </div>
  );
}