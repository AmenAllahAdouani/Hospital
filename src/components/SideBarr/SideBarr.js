import React from "react";
import "./Sidebarr.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const SideBarr = () => {
  const navigate = useNavigate()
  return (
    <div className="sideBarContainer" >
      <p className="sideBarTitle" >Profil adjoint</p>
      <div className="sideBarOptions">
        <div className="sideBarButtons" onClick={(e)=>{
          e.preventDefault();
          navigate('/rendezvous')
        }}>
          <FontAwesomeIcon icon={faUser} />
          <p>Gere RDV</p>
        </div>
        <div className="sideBarButtons">
          <FontAwesomeIcon icon={faUser} />
          <p>Gere patient</p>
        </div>
        <div className="sideBarButtons" onClick={(e)=>{
          e.preventDefault()
          navigate("/profilAdjoint")
        }}>
          <FontAwesomeIcon icon={faCircleUser} />
          <p>Profile</p>
        </div>
      </div>
    </div>
  );
};

export default SideBarr;