import React, { useEffect } from 'react'
import Navbar from '../NavBar/Navbar'
import UpperBody from './UpperBody'
import ServicePage from './ServicePage';
import Footer from '../Footer/Footer';
import NosDocteurs from './NosDocteurs';
import "./landing.css"


const LandingPage = () => {
  useEffect(()=>{
  },[])
  return (
    <div className='landingPage' >
      <Navbar/>
      <UpperBody/>
      <ServicePage/>
      <NosDocteurs/>
      <Footer/>
    </div>
  )
}

export default LandingPage;