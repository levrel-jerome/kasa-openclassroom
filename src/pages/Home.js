import React from "react";
import Logements from "../components/Getlogements";
import Entete from "../components/Entete";

const Home = () => {
  return (
    <>
      <Entete />
      <div>
        <Logements />
      </div>
    </>
  );
};

export default Home;
