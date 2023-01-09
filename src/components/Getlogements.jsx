import React from "react";
import { Link } from "react-router-dom";
import Logements from "../data/logements.json";

function GetLogements() {
  return (
    <div className="logements-container">
      {Logements.map((logement) => {
        return (
          <Link className="lien-logement" key={logement.id} to={`/logement/${logement.id}`}>
            <div className="logement-card">
              <img src={logement.cover}  alt="" />
              <h1>{logement.title}</h1>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default GetLogements;
