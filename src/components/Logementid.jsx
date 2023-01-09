import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Logements from "../data/logements.json";
import Dropdown from "../components/Dropdown";
import Carousel from "./Carousel";
import Rating from "./Rating";

 function LogementId () {
    const { id } = useParams();

    const [logement, setLogement] = useState();

    useEffect(() => {
      const logement = Logements.find((logement) => logement.id === id)
      setLogement(logement)
    }, [id])  
    return (
       <div className="container-logement-id">
        {logement && /*si logement existe j'affiche ça*/<>
                <Carousel image={logement.pictures}/>
                  <div className="lieu-proprietaire">
                  <div className="lieu-logement">
                    <h1>{logement.title}</h1>
                    <p>{logement.location}</p>
                    {logement.tags.map((tag, i) => <button key={i}>{tag}</button>)}
                  </div>
                  <div className="proprietaire-rating">
                  <div className="proprietaire">
                    <p>{logement.host.name}</p>
                    <img src={logement.host.picture} alt="" />
                  </div>
                  <Rating rating={logement.rating}/>
                  </div>
                  </div>
                  <div className="dropdown-id">
                  <Dropdown name="Description">
                    <p>
                    {logement.description}
                    </p>
                  </Dropdown>
                  <Dropdown name="Equipements">
                    <div className="equipement-content">
                    {logement.equipments.map((equipement, i) => <p key={i}>{equipement}</p>)}
                    </div>
                  </Dropdown>
                  </div>
        </>
        }
        </div>
      );
} 

export default LogementId;