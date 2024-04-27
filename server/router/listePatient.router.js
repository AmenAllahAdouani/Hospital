const listePatientRoute = require('express').Router()
const {getAll, getOne, add, update, remove} = require('../controller/listePatient.controller')
listePatientRoute.get('/getAll', getAll)
listePatientRoute.get('/getOne/:id', getOne)
listePatientRoute.post('/add',add)
listePatientRoute.put('/update/:id',update)
listePatientRoute.delete('/delete/:id',remove)





module.exports = listePatientRoute
