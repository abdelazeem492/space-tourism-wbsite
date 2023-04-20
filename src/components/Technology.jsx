import React, { useState } from "react";
import allData from "../data.json";

const Technology = () => {
  const technologyData = {
    Launch_vehicle: allData.technology[0],
    Spaceport: allData.technology[1],
    Space_capsule: allData.technology[2],
  };
  const [data, setData] = useState(technologyData.Launch_vehicle);
  return (
    <section id="Technology">
      <div className="container">
        <h5>
          <span>03</span>
          Space Launch 101
        </h5>
        <div className="innerContainer">
          <div className="left">
            <div className="bullets">
              <button
                onClick={() => {
                  setData(technologyData.Launch_vehicle);
                }}
                className={
                  data === technologyData.Launch_vehicle ? "active" : ""
                }
              >
                1
              </button>
              <button
                onClick={() => {
                  setData(technologyData.Space_capsule);
                }}
                className={
                  data === technologyData.Space_capsule ? "active" : ""
                }
              >
                2
              </button>
              <button
                onClick={() => {
                  setData(technologyData.Spaceport);
                }}
                className={data === technologyData.Spaceport ? "active" : ""}
              >
                3
              </button>
            </div>
            <div className="text fade-top">
              <h6>THE TERMINOLOGY…</h6>
              <h3>{data.name}</h3>
              <p>{data.description}</p>
            </div>
          </div>
          <img
            className="portrait fade-left"
            src={data.images.portrait}
            alt={data.name}
          />
          <img
            className="landscape fade-bottom"
            src={data.images.landscape}
            alt={data.name}
          />
        </div>
      </div>
    </section>
  );
};

export default Technology;
