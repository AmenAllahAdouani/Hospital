import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

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

const DeleteRdv = ({handleClose,open,deleteRdv}) => {
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
            <p>Voulez vous supprimer ce rendez-vous ?</p>
            <div style={{display:'flex' , justifyContent:'space-between',alignItems:'center', width:'100%'}}>
              <p className="AddButton" onClick={(e)=>{
                e.preventDefault();
                deleteRdv()
              }}>Supprimer</p>
              <p className="AddButton" onClick={handleClose}>Annuler</p>
            </div>
          </div>
      </Box>
    </Modal>
  </div>
  )
}

export default DeleteRdv