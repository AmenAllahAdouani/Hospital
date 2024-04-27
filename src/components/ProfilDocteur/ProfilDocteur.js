import React, { useEffect, useState } from 'react'
import "./ProfilDocteur.css";
import Navbar from '../NavBar/Navbar';
import LowerProfile from './LowerProfile';


const ProfilDocteur = () => {
  const [user,setUser] = useState({})

  useEffect(()=>{
  },[])
  return (
    <div>
        <Navbar/>
        <LowerProfile/>
    </div>
  )
}

export default ProfilDocteur