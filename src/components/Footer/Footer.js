import React from "react";
import "./Footer.css";
// import Facbook from "../../images/fsttt.jpg"
import Map from "../../images/map.png"

const Footer = () => {
  return (
    <footer class="site-footer">
      <div id="footer">
        <div className="optionsContainer">
          <p className="optionts">Suivez-Nous: </p>
          <p className="optionts">Adresse: 123 Rue Principale, Ville, Pays </p>
          <p className="optionts">Email: contact@example.com</p>
          <p className="optionts"> Téléphone: +123 456 789</p>
        </div>
      </div>
        <img src={Map} alt="" className="mapImage" />
        
    </footer>
  );
};
export default Footer;
