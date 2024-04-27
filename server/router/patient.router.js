const patientRout = require('express').Router()
const authProtection = require("../middleware/auth")
const {getAll, getOne, add, update, remove,register,login, getOneById} = require('../controller/patient.controller')
patientRout.post('/register',register)
patientRout.post('/login',login)
patientRout.get('/getAll', getAll)
patientRout.get('/getOne',authProtection, getOne)
patientRout.post('/add',add)
patientRout.put('/update/:id',update)
patientRout.delete('/delete/:id',remove)
patientRout.get('/getById/:id',getOneById)





module.exports = patientRout