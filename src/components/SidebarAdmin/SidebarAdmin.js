import React from 'react'
import "./SidebarAdmin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const SidebarAdmin = () => {
  return (
    <div className="sideBarContainer" >
      <p className="sideBarTitle" >Profil admin</p>
      <div className="sideBarOptions">
        <div className="sideBarButtons">
          <FontAwesomeIcon icon={faUser} />
          <p>Gere utilisateur</p>
        </div>
        <div className="sideBarButtons">
          <FontAwesomeIcon icon={faUser} />
          <p>consulation</p>
        </div>
        
      </div>
    </div>
  )
}

export default SidebarAdmin