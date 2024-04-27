const historiqueMedicalRoute = require('express').Router()
const {getAll, getOne, add, update, remove} = require('../controller/historiqueMedical.conroller')
historiqueMedicalRoute.get('/getAll', getAll)
historiqueMedicalRoute.get('/getOne/:id', getOne)
historiqueMedicalRoute.post('/add', add)
historiqueMedicalRoute.put('/update/:id', update)
historiqueMedicalRoute.delete('/delete/:id', remove)




module.exports = historiqueMedicalRoute
