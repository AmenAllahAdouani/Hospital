import React, { useState } from 'react'
import "./Login.css"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


const Login = () => {
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const [type,setType] = useState('')

  const navigate = useNavigate()
  const handleLogin=async (body) => {
    try {
      if (type==="patient"){
        const data = await axios.post("http://localhost:3000/api/patient/login",body)
        localStorage.setItem('token',data.data.token)
        navigate("/profilPatient")
       }
       else if (type==="doctor"){
        const data = await axios.post("http://localhost:3000/api/doctor/login",body)
        localStorage.setItem('token',data.data.token)
        navigate("/profiledocteur")

      }
      else if (type==="adjoint"){
        const data = await axios.post("http://localhost:3000/api/adjointParat/login",body)
        localStorage.setItem('token',data.data.token)
        navigate("/profilAdjoint")

      }
      else if (type==="admin"){
        const data = await axios.post("http://localhost:3000/api/admin/login",body)
        localStorage.setItem('token',data.data.token)
        navigate("/profilAdmin")
      }
    } catch (error) {
      throw error
    }
  }
//  const getOnePatient

return (
    <div className='login-container'>
      <div className="login-box">
  <p>Login</p>
  <form>
    <div className="user-box">
      <input required="" name="" type="text" onChange={(e)=>setEmail(e.target.value)} value={email} />
      <label>Email</label>
    </div>
    <div className="user-box">
      <input required="" name="" type="password" onChange={(e)=>setPassword(e.target.value)} value={password}/>
      <label>Password</label>
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
      e.preventDefault()
      handleLogin({
        email:email,
        password:password
        })}}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
    </a>
  </form>
  <p>Don't have an account? <Link to="/registre"  className='linksRoute' > <a  className="a2"  >Sign up!</a></Link></p>
</div>
      
    </div>
  )
}

export default Login