import React from "react";
import "./NosDocteurs.css";
import chirug from "../../images/chirugien.webp";
import dermato from "../../images/derma.jpg";
import cardio from "../../images/cardio.jpg";
import general from "../../images/generaliste.png";
import genico from "../../images/genico.jpg";
import radio from "../../images/radio.jpg";

const NosDocteurs = () => {
  return (
    <div id="docteur">
      <div style={{display : "flex" , flexDirection : "column"}}>
        <h1 className="formation">Information sur les docteurs:</h1>
        <p className="parat">
          "Découvrez notre équipe de médecins compétents et attentionnés, prêts
          à vous fournir les meilleurs soins possibles. Nos médecins sont
          hautement qualifiés, avec une formation solide et une expérience
          diversifiée. Ils sont dévoués à offrir des soins personnalisés à
          chaque patient, en utilisant les dernières technologies médicales pour
          garantir les meilleurs résultats. Nous sommes là pour vous accompagner
          dans votre parcours de santé avec professionnalisme et compassion."
        </p>
      </div>
      <div className="Nosdocteur">
        <div className="doctorsContainer">
          <h2>Les spécialités des médecins</h2>
          <div className="cardsContainer">
            <div className="card">
              <img src={chirug} alt="" />
              <p className="doctorCardTitle">Chirugien</p>
            </div>
            <div className="card">
              <img src={dermato} alt="" />
              <p className="doctorCardTitle">Dermatologue</p>
            </div>
            <div className="card">
              <img src={cardio} alt="" />
              <p className="doctorCardTitle">Cardiologue</p>
            </div>
            <div className="card">
              <img src={general} alt="" />
              <p className="doctorCardTitle">Généraliste</p>
            </div>
            <div className="card">
              <img src={genico} alt="" />
              <p className="doctorCardTitle">Genicologue</p>
            </div>
            <div className="card">
              <img src={radio} alt="" />
              <p className="doctorCardTitle">Radiologue</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NosDocteurs;
