const rendezVousRout= require('express').Router()
const {getAll, getOne, add, update, remove} = require('../controller/rendezVous.controller')
rendezVousRout.get('/getAll', getAll)
rendezVousRout.get('/getOne/:id', getOne)
rendezVousRout.post('/add',add)
rendezVousRout.put('/update/:id',update)
rendezVousRout.delete('/delete/:id',remove)





module.exports = rendezVousRout  