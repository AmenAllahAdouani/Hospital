import React, { useEffect, useState } from "react";
import Navbar from "../NavBar/Navbar";
import "./rendezvous.css";
import SideBarr from "../SideBarr/SideBarr";
import OneRDV from "./oneRDV";
import axios from "axios";
import AddRdv from "./AddRdv";
function Rendezvous() {
  const [listRdv,setListRdv] = useState([])
  const [reload,setReload] = useState(false)

  const getRdv = async () => {
    try {
      const token = localStorage.getItem("token")
      if(token) {
        const data = await axios.get("http://localhost:3000/api/rendezvous/getAll")
        setListRdv(data.data)
        console.log(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getRdv()
  },[listRdv.length,reload])

  return (
    <div style={{ height: "100vh", display:"flex",flexDirection:"column" }}>
      <div>
      <Navbar />
      </div>
      <div style={{ height: "93%", display: "flex", gap: "2rem" }}>
        <SideBarr />
        <div className="rdvContent">
          <AddRdv/>
        <div className="rdvContainer">
          {
            listRdv.map((rdv,index)=>{
              return <OneRDV key={index} rdv={rdv} reload={reload} setReload={setReload} />
            })
          }
    </div>
        </div>
      </div>
    </div>
  );
}

export default Rendezvous;
