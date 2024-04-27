import React from 'react'
import "./ajoute.css"
import SideBar from '../SideBar/SideBar'

const Ajoute = () => {
  return (
    <div className='lowerProfile'>
      <SideBar/>
      <section class="container">
      <header>fiche mesure</header>
      <form class="form" action="#">
      <div class="input-box">
        <label>nom de mesure</label>
        <input required="" placeholder="nom de mesure" type="text"/>
      </div>
      <div class="input-box">
        <label>description</label>
        <input required="" placeholder=" description de mesure" type="text"/>
      </div>
      <br/>
      <div class="input-box">
      <label>Date et heure de mesure</label>
      <input required placeholder="la date et heure de mesure" type="datetime-local" />
    </div>
    <button>Submit</button>
    </form>
    </section>
  </div>
  )
}

export default Ajoute