import React, { useState } from "react";
import allData from "../data.json";

const Crew = () => {
  const crewData = {
    Douglas_Hurley: allData.crew[0],
    Mark_Shuttleworth: allData.crew[1],
    Victor_Glover: allData.crew[2],
    Anousheh_Ansari: allData.crew[3],
  };

  const [data, setData] = useState(crewData.Victor_Glover);
  return (
    <section id="Crew">
      <div className="container">
        <h5>
          <span>02</span>
          Meet Your Crew
        </h5>

        <div className="innerContainer fade-right">
          <div className="text">
            <h4>{data.role}</h4>
            <h3>{data.name}</h3>
            <p>{data.bio}</p>
            <div className="bullets">
              <span
                onClick={() => {
                  setData(crewData.Victor_Glover);
                }}
                className={`nav-text ${
                  data === crewData.Victor_Glover && "active"
                }`}
              ></span>
              <span
                onClick={() => {
                  setData(crewData.Mark_Shuttleworth);
                }}
                className={`nav-text ${
                  data === crewData.Mark_Shuttleworth && "active"
                }`}
              ></span>
              <span
                onClick={() => {
                  setData(crewData.Douglas_Hurley);
                }}
                className={`nav-text ${
                  data === crewData.Douglas_Hurley && "active"
                }`}
              ></span>
              <span
                onClick={() => {
                  setData(crewData.Anousheh_Ansari);
                }}
                className={`nav-text ${
                  data === crewData.Anousheh_Ansari && "active"
                }`}
              ></span>
            </div>
          </div>
        </div>
      </div>
      <img className="fade-left" src={data.images.webp} alt={data.name} />
    </section>
  );
};

export default Crew;
