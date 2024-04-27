const express = require('express');
const cors = require('cors');
const app = express();
const adjointParatRoute = require('./router/adjointParat.router.js');
const rendezVousRout=require('./router/rendezVous.router.js');
const patientRout=require('./router/patient.router.js');
const adminRoute=require('./router/admin.router.js');
const doctorRoute=require('./router/doctor.router.js');
const historiqueMedicalRoute=require('./router/historiqueMedical.router.js');
const identifiantCsbRoute=require('./router/idetifiantCsb.router.js');
const mesureRoute=require('./router/mesure.router.js');
const listePateint=require('./router/listePatient.router.js');
const listePatientRoute = require('./router/listePatient.router.js');
require('./database.js');
const PORT = 3000;


app.use(cors());


app.use(express.json());
app.use(express.static(__dirname + "/../client/dist"));
app.use('/api/adjointParat',adjointParatRoute);
app.use('/api/rendezvous',rendezVousRout);
app.use('/api/patient',patientRout);
app.use('/api/admin',adminRoute);
app.use('/api/doctor',doctorRoute);
app.use('/api/historiqueMedical',historiqueMedicalRoute);
app.use('/api/identifiantCsb',identifiantCsbRoute);
app.use('/api/mesure',mesureRoute);
app.use('/api/listePatient',listePatientRoute);

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });

  