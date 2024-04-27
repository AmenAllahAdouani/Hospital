import {React} from "react";
import "./style.css";
import logo from "../../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faRightToBracket} from "@fortawesome/free-solid-svg-icons"
import { Link as ScrollLink } from "react-scroll";
import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
  const [nav, setNav] = useState(false);
  const [auth,setAuth] = useState(false);
  const navigate = useNavigate();


  const validAuth = () => {
    const token = localStorage.getItem("token")
    if(token){
      setAuth(true)
    }
    else{
      setAuth(false)
    }
  } 



  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    validAuth()
    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []); // Adding empty dependency array to ensure the event listener is only added once

  return (
    <div className="navbar">
      <div className="header" >
        <img src={logo}/>
        <p className="title">E-Patient</p>
      </div>
    <nav className={nav ? 'nav active' : 'nav'}>
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="nav-icon"></span>
      </label>
      <ul className="optionsContainer">
        <li>
          <ScrollLink to="home" smooth={true} duration={500}>
            <p className="options">Services</p>
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="footer" smooth={true} duration={500}>
            <p className="options">A propos</p>
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="docteur" smooth={true} duration={500}>
          <p className="options"> Docteur</p>
          </ScrollLink>
        </li>
      </ul>
    </nav>
    {
      auth ? <Link to="/login"  className="linksRoute">
      <div className="buttons" onClick={(e)=>{
          e.preventDefault();
          navigate("/");
          localStorage.removeItem("token");
      }}>
        <FontAwesomeIcon icon={faRightToBracket} />
        <p className="loginButton">Log Out</p>
      </div>
      </Link> : 
      <Link to="/login"  className="linksRoute">
      <div className="buttons" onClick={(e)=>{
          e.preventDefault();
          navigate("/login");
      }}>
        <FontAwesomeIcon icon={faRightToBracket} />
        <p className="loginButton">Login</p>
      </div>
      </Link>
    }
    </div>
  );
}

export default Navbar;
