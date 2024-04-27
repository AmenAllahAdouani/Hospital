import React from "react";
import "./sideBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const SideBar = () => {
  return (
    <div className="sideBarContainer" >
      <p className="sideBarTitle" >Profil médecin</p>
      <div className="sideBarOptions">
        <div className="sideBarButtons">
          <FontAwesomeIcon icon={faUser} />
          <p>Consulter RDV</p>
        </div>
        <div className="sideBarButtons">
          <FontAwesomeIcon icon={faUser} />
          <p>Gere Mesure</p>
        </div>
        <div className="sideBarButtons">
          <FontAwesomeIcon icon={faUser} />
          <p>Consultaion</p>
        </div>
        <div className="sideBarButtons">
          <FontAwesomeIcon icon={faUser} />
          <p> Gere historique </p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
