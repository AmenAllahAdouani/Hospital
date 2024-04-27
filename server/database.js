const { Sequelize, DataTypes } = require("sequelize");
const connection = new Sequelize(
    "e_patient",
    "root",
    "root",
    {
      host: "localhost",
      dialect: "mysql",
    }
  );
  connection.authenticate()
.then(()=>{
  console.log("database connected successfuly");
})
.catch((error)=>{  
  console.log(error);
})
const AdjointParat = require('./model/adjointParat.model.js')(connection,DataTypes)
const Admin = require('./model/admin.model.js')(connection,DataTypes)
const Doctor = require('./model/doctor.model.js')(connection,DataTypes)
const HistoriqueMedical = require('./model/historiqueMedical.model.js')(connection,DataTypes)
const IdentifiantCsb = require('./model/identifiantCsb.model.js')(connection,DataTypes)
const Mesure = require('./model/mesure.model.js')(connection,DataTypes)
const Patient = require('./model/patient.model.js')(connection,DataTypes)
const RendezVous = require('./model/rendezVous.model.js')(connection,DataTypes)  
const ListePatient = require('./model/listePatient.model.js')(connection,DataTypes)




const db = {}
db.AdjointParat=AdjointParat
db.Admin=Admin
db.Doctor=Doctor
db.HistoriqueMedical=HistoriqueMedical
db.IdentifiantCsb=IdentifiantCsb
db.Mesure=Mesure
db.Patient=Patient 
db.RendezVous=RendezVous
db.ListePatient=ListePatient

Doctor.hasMany(Patient)
Patient.belongsTo(Doctor)

Doctor.belongsTo(AdjointParat)
AdjointParat.hasMany(Doctor)

IdentifiantCsb.hasMany(Doctor)
Doctor.belongsTo(IdentifiantCsb)

Doctor.hasMany(HistoriqueMedical)
HistoriqueMedical.belongsTo(Doctor)

AdjointParat.hasMany(RendezVous)
RendezVous.belongsTo(AdjointParat)

IdentifiantCsb.hasMany(AdjointParat)
AdjointParat.belongsTo(IdentifiantCsb)

AdjointParat.hasMany(Patient)
Patient.belongsTo(AdjointParat)

Patient.hasMany(RendezVous)
RendezVous.belongsTo(Patient)

Patient.hasMany(HistoriqueMedical)
HistoriqueMedical.belongsTo(Patient)

IdentifiantCsb.hasMany(Patient)
Patient.belongsTo(IdentifiantCsb)

Patient.hasMany(Mesure)
Mesure.belongsTo(Patient)

Admin.belongsTo(IdentifiantCsb)
IdentifiantCsb.belongsTo(Admin)

Doctor.hasMany(RendezVous)
RendezVous.belongsTo(Doctor)


// connection.sync({ force: true })
//   .then(() => {
//     console.log("tables created successfully!");
//   })
//     .catch((error) => {
//     console.error("Unable to create tables : ", error);
//   });
  module.exports = db;