import React from "react";
import "./SidebarPatient.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const SideBarPatient = () => {
  return (
    <div className="sideBarContainer" >
      <p className="sideBarTitle" >Profil patient</p>
      <div className="sideBarOptions-patient">
        <div className="sideBarButtons-patient">
          <FontAwesomeIcon icon={faUser} />
          <p>Consulter RDV</p>
        </div>
        <div className="sideBarButtons-patient">
          <FontAwesomeIcon icon={faUser} />
          <p>Consulter Mesure</p>
        </div>
        <div className="sideBarButtons-patient">
          <FontAwesomeIcon icon={faUser} />
          <p>Consulter historique</p>
        </div>
      </div>
    </div>
  );
};

export default SideBarPatient;