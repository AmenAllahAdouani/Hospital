const identifiantCsbRoute = require('express').Router()
const {getAll, getOne, add, update, remove} = require('../controller/identifiantCsb.controller')
identifiantCsbRoute.get('/getAll', getAll)
identifiantCsbRoute.get('/getOne/:id', getOne)
identifiantCsbRoute.post('/add', add)
identifiantCsbRoute.put('/update/:id', update)
identifiantCsbRoute.delete('/delete/:id', remove)




module.exports = identifiantCsbRoute