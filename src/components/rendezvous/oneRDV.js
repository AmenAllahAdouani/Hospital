import axios from "axios";
import React, { useEffect, useState } from "react";
import DeleteRdv from "./DeleteRdv";
import EditRdv from "./EditRdv";

const OneRDV = ({rdv}) => {
  const [patient,setPatient] = useState({})
  const [openDelete,setOpenDelete] = useState(false)
  const [openUpdate,setOpenUpdate] = useState(false)

  const handleCloseDelete = () => setOpenDelete(false)
  const handleOpenDelete = () => setOpenDelete(true)
  const handleCloseUpdate = () => setOpenUpdate(false)
  const handleOpenUpdate = () => setOpenUpdate(true)

  const deleteRdv = async () => {
    try {
      await axios.delete(`http://localhost:3000/api/rendezvous/delete/${rdv.id}`);
      alert('Supprimer avec succées')
      handleCloseDelete()
    } catch (error) {
      console.log(error);
    }
  }
  const editRdv = async (body) => {
    try {
      await axios.put(`http://localhost:3000/api/rendezvous/update/${rdv.id}`,body);
      alert('Modifier avec succées')
      handleCloseUpdate()
    } catch (error) {
      console.log(error);
    }
  }

  const getPatient = async ()=>{
    try {
      const data = await axios.get(`http://localhost:3000/api/patient/getById/${rdv.patientId}`)
      console.log(data.data);
      setPatient(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getPatient()
  },[]) 

  return (
    <div>
      <div className="card-container">
        <div className="card">
          <div className="img-content">
            <p>{patient.first_name + " " + patient.last_name}</p>
          </div>
          <div className="content">
            <div className="contentDetails">
            <p>Lieu : {rdv.lieu} </p>
            <p>Date : {rdv.date.substring(0,10)}</p>
            <p>Heure : {rdv.heure.substring(0,5)}</p>
            </div>
          <div className="cardButtons">
            <p className="editButtons" onClick={(e)=>{
              e.preventDefault();
              handleOpenUpdate()
            }}>Modifier</p>
            <p className="editButtons" onClick={(e)=>{
              e.preventDefault()
              handleOpenDelete()
            }}>Supprimer</p>
          </div>
          </div>
        </div>
        <DeleteRdv handleClose={handleCloseDelete} open={openDelete} rdv={rdv} deleteRdv={deleteRdv}/>
        <EditRdv handleClose={handleCloseUpdate} open={openUpdate} rdv={rdv} editRdv={editRdv} />
      </div>
    </div>
  );
};

export default OneRDV;
