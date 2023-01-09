import React from "react";
import { NavLink } from "react-router-dom";

const Page404 = () => {
  return (
    <div>
      <p className="error">404</p>
      <p className="error-explain">Oups la page que demandez n'existe pas.</p>
      <NavLink to="/">
        <p className="return-home">Retourner sur la page d'accueil</p>
      </NavLink>
    </div>
  );
};

export default Page404;
