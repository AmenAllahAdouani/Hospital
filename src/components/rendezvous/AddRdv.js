import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
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

const AddRdv = ({setReload,reload}) => {
  const [open,setOpen] = useState(false)
  const [listPatient,setListPatient] = useState([])
  const [lieu,setLieu] = useState('')
  const [date,setDate] = useState('')
  const [heure,setHeure] = useState('')
  const [patientId,setPatientId] = useState(0)

  const getPatients = async () =>  {
    try {
      const data = await axios.get("http://localhost:3000/api/patient/getAll")
      setListPatient(data.data)
    } catch (error) {
      console.log(error);
    }
  }

  const addRdv = async (body) => {
    try {
      console.log(body);
      await axios.post("http://localhost:3000/api/rendezvous/add",body)
      handleClose()
      alert("Rdv créer avec succeés")
      setReload(!reload)
    } catch (error) {
      console.log(error);
    }
  }


  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(()=>{
    getPatients()
  },[])

  return (
    <div>
      <Button onClick={handleOpen} className="modalButton" >Ajouter RDV</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <div className="formContainer">
              <input type="text" placeholder="Lieu" onChange={(e)=>setLieu(e.target.value)}/>
              <input type="date" onChange={(e)=>setDate(e.target.value)} />
              <select className="selectRdv" onChange={(e)=>setHeure(e.target.value)}>
                <option>08:00</option>
                <option>09:00</option>
                <option>10:00</option>
                <option>11:00</option>
                <option>13:00</option>
                <option>14:00</option>
                <option>15:00</option>
              </select>
              <select className="selectRdv" onChange={(e)=>setPatientId(e.target.value)}>
                {
                  listPatient.map((patient, index) =>{
                    return <option value={patient.id} key={index}>{patient.first_name +" "+patient.last_name}</option>
                  })
                }
              </select>
              <div style={{display:'flex' , justifyContent:'space-between',alignItems:'center', width:'100%'}}>
                <p className="AddButton" onClick={(e)=>{
                  e.preventDefault();
                  addRdv({
                    lieu,
                    date,
                    heure,
                    patientId
                  });
                }}>Ajouter</p>
                <p className="AddButton" onClick={handleClose}>Annuler</p>
              </div>
            </div>
        </Box>
      </Modal>
    </div>
  );
};

export default AddRdv;
