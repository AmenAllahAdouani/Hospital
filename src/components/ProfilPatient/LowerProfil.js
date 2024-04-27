import React, { useEffect, useState } from 'react'
import SidebarPatient from '../SidebarPatient/SidebarPatient'
import "./LowerProfil.css"
import bejii from "../../images/bejii.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';

const LowerProfil = () => {
    const [lastName,setLastName] = useState("")
    const [firstName,setFirstName] = useState("")
    const [email,setEmail] = useState("")
    const [phone,setPhone] = useState("")
    const [user,setUser] = useState({})
    const [image,setImage] = useState("")
    


    const getPatient = async () => {
        const token = localStorage.getItem("token")
        if(token) {
            const data = await axios.get("http://localhost:3000/api/patient/getOne", {
                headers:{
                    authorization:`Bearer ${token}`
                }
            })
            setUser(data.data)
            setImage(data.data.photo)
            setLastName(data.data.last_name)
            setFirstName(data.data.first_name)
            setEmail(data.data.email)
            setPhone(data.data.phone)
        }
    }

    const handleUpdate = async (body) => {
        try {
          const data = await axios.put(`http://localhost:3000/api/patient/update/${user.id}`,body)
        } catch (error) {
          console.log(error);
        }
    }


    const profileUpload= async (e)=>{
        const formData=new FormData()
        formData.append("file",e.target.files[0])
        formData.append("upload_preset","oztadvnr")
        await axios.post("https://api.cloudinary.com/v1_1/dl4qexes8/upload",formData).then((response)=>{
          setImage(response.data["secure_url"])
        
        }).catch((error)=>{
          throw error
        })
        }

        useEffect(()=>{
            getPatient()
        },[])


  return (
    <div className='lowerProfile'>
        <SidebarPatient/>
        <div className='lowerProfileRight'>
            <div className='imageContainer'>
                <img src={image} className='profileImage' />
                <input type='file' style={{zIndex : "1" , opacity : "0" , position : "absolute"}}  onChange={(e)=>profileUpload(e)}/>
            </div>
            <div className='updateInputsContainer' >
                <div className='textInputUpdate' >
                    <p className='updateInputsTitle'>Last Name : </p>
                    <input type='text' placeholder='Last name' className='updateInputs' value={lastName}   onChange={(e)=>setLastName(e.target.value)} />
                </div>
                <div className='textInputUpdate' >
                    <p className='updateInputsTitle'>First Name : </p>
                    <input type='text' placeholder='First name' className='updateInputs' value={firstName} onChange={(e)=>setFirstName(e.target.value)} />
                </div>
                <div className='textInputUpdate' >
                    <p className='updateInputsTitle'>Email : </p>
                    <input type='text' placeholder='Email' className='updateInputs' value={email}  onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <div className='textInputUpdate' >
                    <p className='updateInputsTitle'>Phone : </p>
                    <input type='text' placeholder='Phone' className='updateInputs' value={phone}  onChange={(e)=>setPhone(e.target.value)} />
                </div>
            </div>
            <div className="buttons" onClick={(e)=>{
                e.preventDefault();
                handleUpdate(
                    {
                        last_name : lastName,
                        first_name : firstName,
                        email : email,
                        phone : phone,
                        photo : image
                    }
                );
                alert('Updated');
            }} >
      <FontAwesomeIcon icon={faEdit} />
      <p className="loginButton">Update</p>
    </div>
        </div>
    </div>
  )
}

export default LowerProfil