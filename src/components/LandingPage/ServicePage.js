import React from 'react'
import "./ServicePage.css"
import Service from "../../images/mayna.jpg"
import Patient from "../../images/ttttt.png"
import Docteur from "../../images/hamza.jpg"
import Koubaa from "../../images/kouba.jpg"
import Ghbar from "../../images/chabeb.jpg"

const  ServicePage = () => {
  return (
    
    <div className='home'>  
    <h1 className='information'> Information sur les services :</h1>
    <div class="service-info">
    <div class="step">
        <h2>Étape 01</h2>
        <p>Surveillez vos mesures sanitaires et prenez rendez-vous en toute simplicité. Restez connecté avec votre médecin pour des soins personnalisés.</p>
    </div>
    <div class="step">
        <h2>Étape 02</h2>
        <p>Accédez aux détails de votre rendez-vous et aux coordonnées du médecin. Restez informé de vos prochaines visites.</p>
    </div>
    <div class="step">
        <h2>Étape 03</h2>
        <p>Recevez des rappels pour les rendez-vous à venir et suivez les progrès de votre santé. Reprogrammez ou annulez facilement des rendez-vous selon vos besoins.</p>
    </div>
</div>
<div className='gallery'>
    <img className='patient' src={Patient} />
    <img  className ='imagee2' src={Service}/>
    <img className='hamza' src={Docteur}/>
    <img className='kouba' src={Koubaa}/>
    <img className='ghbar' src={Ghbar}/>
    </div>

      </div>    
    
  )
}

export default ServicePage