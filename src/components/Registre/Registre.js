import React, { useState } from "react";
import "./Registre.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Registre = () => {
  const navigate = useNavigate();
  const [type, setType] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone,setPhone] = useState("")
  const [sexe, setSexe] = useState("");
  const handleRegister = async (body) => {
    try {
      console.log(body);
       if (type==="patient"){
        const data = await axios.post("http://localhost:3000/api/patient/register",body);
       }
       else if (type==="doctor"){
        const data = await axios.post("http://localhost:3000/api/doctor/register",body);
      }
      else if (type==="adjoint"){
        const data = await axios.post("http://localhost:3000/api/adjointParat/register",body);
      }
      else if (type==="admin"){
        const data = await axios.post("http://localhost:3000/api/admin/register",body);
      }
     
  }catch (error) {
    throw error
  }
}


  return (
    <div>
      <div className="login-box">
        <p>Registre</p>
        <form>
          <div className="user-box">
            <input required="" name="" type="text"  onChange={(e)=>setFirstName(e.target.value)} value={firstName}/>
            <label>First Name</label>
          </div>
          <div className="user-box">
            <input required="" name="" type="text" onChange={(e)=>setLastName(e.target.value)} value={lastName}/>
            <label>Last Name</label>
          </div>
          
          <div className="user-box">
            <input required="" name="" type="text" onChange={(e)=>setEmail(e.target.value)} value={email}/>
            <label>Email</label>
          </div>
          <div className="user-box">
            <input required="" name="" type="text" onChange={(e)=>setPhone(e.target.value)} value={phone}/>
            <label>Phone</label>
          </div>
          <div className="user-box">
            <input required="" name="" type="password" onChange={(e)=>setPassword(e.target.value)}value={password} />
            <label>Password</label>
          </div>
            
          <div className="sexeSelection" >
            <label className="sexeLabel" >Sexe</label>
          <div class="radio-input">
  <label>

  <input value="homme" name="value-sexe" id="value-1" type="radio"  onChange={(e)=>setSexe(e.target.value)}/>
  <span>Homme</span>
  </label>
  <label>
    <input value="femme" name="value-sexe" id="value-2" type="radio"  onChange={(e)=>setSexe(e.target.value)}/>
  <span>Femme</span>
  </label>
 
  <span class="selection"></span>
</div>
            </div>

         <div className="sexeSelection">
         <label className="sexeLabel" >Role</label>

         <div class="radio-input-custom">
            <label>
              <input
                value="doctor"
                name="value-radio"
                id="value-1"
                type="radio"
                onChange={(e)=>setType(e.target.value)}/>
              <span>Doctor</span>
            </label>
            <label>
              <input
                value="adjoint"
                name="value-radio"
                id="value-2"
                type="radio" onChange={(e)=>setType(e.target.value)}/>
              <span>Adjoint</span>
            </label>
            <label>
              <input
                value="patient"
                name="value-radio"
                id="value-3"
                type="radio" onChange={(e)=>setType(e.target.value)}/>
              <span>Patient</span>
            </label>
            <label>
              <input
                value="admin"
                name="value-radio"
                id="value-3"
                type="radio"  onChange={(e)=>setType(e.target.value)}/>
              <span>Admin</span>
            </label>
            <span class="selection-custom"></span>
          </div>
         </div>

          <a href="" onClick={(e)=>{
            e.preventDefault();
            handleRegister({
              first_name:firstName,
              last_name:lastName,
             email,
              password,
              sexe,
              phone
              
            });
          }}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </a>
        </form>
        <p>
          Already have an account?{" "}
          <Link to="/login"  className="linksRoute" >
          <a  href="#" className="a2">
            Sign in!
          </a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Registre;
