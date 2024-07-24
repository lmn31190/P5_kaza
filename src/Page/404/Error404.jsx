import React from "react";
import { Link } from "react-router-dom";
import './Error404.scss';

const Error404 = () => {
  return (
    <div className="error">
      <p className="error404">404</p>
      <p className="errorMsg">Oups! La page que vous demandez n'existe pas.</p>
      <Link className="linkHome" to={"/"}>
        <p className="backHome">Retourner sur la page d'accueil</p>
      </Link>
    </div>
  );
};

export default Error404;
