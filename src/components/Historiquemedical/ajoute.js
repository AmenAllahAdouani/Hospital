import React from 'react'
import "./ajoute.css"
import SideBar from '../SideBar/SideBar'

const Ajoute = () => {
  return (
    <div className='lowerProfile'>
      <SideBar/>
      <section class="container">
        <header>fiche historique</header>
        <form class="form" action="#">
          <div class="input-box">
            <label>nom d'historique</label>
            <input required="" placeholder="nom d'historique" type="text"/>
          </div>
          <div class="input-box">
            <label>description</label>
            <input required="" placeholder=" description d'historique" type="text"/>
          </div>
          <br/>
          <div class="input-box">
          <label>Date et heure d'historique</label>
          <input required placeholder="la date et heure d'historique" type="datetime-local" />
        </div>
        <button>Submit</button>
      </form>
    </section>
    </div>
  )
}

export default Ajoute