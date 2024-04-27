const mesureRoute = require('express').Router()
const {getAll, getOne, add, update, remove} = require('../controller/mesure.controller')
mesureRoute.get('/getAll', getAll)
mesureRoute.get('/getOne/:id', getOne)
mesureRoute.post('/add', add)
mesureRoute.put('/update/:id', update)
mesureRoute.delete('/delete/:id', remove)





module.exports =mesureRoute