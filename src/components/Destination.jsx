import React, { useState } from "react";
import allData from "../data.json";

const Destination = () => {
  const destinationData = {
    moon: allData.destinations[0],
    mars: allData.destinations[1],
    europa: allData.destinations[2],
    titan: allData.destinations[3],
  };

  const [data, setData] = useState(destinationData.moon);

  return (
    <section id="Destination">
      <div className="container">
        <h5>
          <span>01</span>
          Pick your destination
        </h5>
        <div className="innerContainer">
          <img src={data.images.webp} alt={data.name} className="fade-top" />

          <div className="text">
            <nav>
              <button
                onClick={() => {
                  setData(destinationData.moon);
                }}
                className={`nav-text ${
                  data === destinationData.moon && "active"
                }`}
              >
                moon
              </button>
              <button
                onClick={() => {
                  setData(destinationData.mars);
                }}
                className={`nav-text ${
                  data === destinationData.mars && "active"
                }`}
              >
                mars
              </button>
              <button
                onClick={() => {
                  setData(destinationData.europa);
                }}
                className={`nav-text ${
                  data === destinationData.europa && "active"
                }`}
              >
                europe
              </button>
              <button
                onClick={() => {
                  setData(destinationData.titan);
                }}
                className={`nav-text ${
                  data === destinationData.titan && "active"
                }`}
              >
                titan
              </button>
            </nav>
            <div className="fade-top">
              <h2>{data.name}</h2>
              <p className="description">{data.description}</p>
              <div className="info">
                <div className="distance">
                  <p className="sub-h2">AVG. DISTANCE</p>
                  <p className="sub-h1">{data.distance}</p>
                </div>
                <div className="travel">
                  <p className="sub-h2">Est. TRAVEL TIME</p>
                  <p className="sub-h1">{data.travel}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destination;
