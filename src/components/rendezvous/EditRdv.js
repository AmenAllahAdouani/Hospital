import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import axios from "axios";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const EditRdv = ({rdv,handleClose,open,editRdv}) => {

    const [listPatient,setListPatient] = useState([])
    const [lieu,setLieu] = useState(rdv.lieu)
    const [date,setDate] = useState(rdv.date)
    const [heure,setHeure] = useState(rdv.heure)
    const [patientId,setPatientId] = useState(rdv.patientId)
  
    const getPatients = async () =>  {
      try {
        const data = await axios.get("http://localhost:3000/api/patient/getAll")
        setListPatient(data.data)
      } catch (error) {
        console.log(error);
      }
    }

    useEffect(()=>{
        getPatients()
        console.log(date);
    },[])

  return (
    <div>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
          <div className="formContainer">
            <input type="text" placeholder="Lieu" onChange={(e)=>setLieu(e.target.value)} value={lieu}/>
            <input type="date" onChange={(e)=>setDate(e.target.value)} value={date.substring(0,10)} />
            <select className="selectRdv" onChange={(e)=>setHeure(e.target.value)} value={heure.substring(0,5)}>
              <option>08:00</option>
              <option>09:00</option>
              <option>10:00</option>
              <option>11:00</option>
              <option>13:00</option>
              <option>14:00</option>
              <option>15:00</option>
            </select>
            <select className="selectRdv" onChange={(e)=>setPatientId(e.target.value)} value={patientId}>
              {
                listPatient.map((patient, index) =>{
                  return <option value={patient.id} key={index}>{patient.first_name +" "+patient.last_name}</option>
                })
              }
            </select>
            <div style={{display:'flex' , justifyContent:'space-between',alignItems:'center', width:'100%'}}>
              <p className="AddButton" onClick={(e)=>{
                e.preventDefault();
                editRdv({
                    lieu,
                    heure,
                    date
                })
              }}>Modifier</p>
              <p className="AddButton" onClick={handleClose}>Annuler</p>
            </div>
          </div>
      </Box>
    </Modal>
  </div>
  )
}

export default EditRdv