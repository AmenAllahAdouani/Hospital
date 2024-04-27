const adjointParatRoute = require('express').Router()
const {getAll, getOne, add, update, remove,register,login} = require('../controller/adjointParat.contoller')
const authProtection = require('../middleware/auth')
adjointParatRoute.post('/register',register)
adjointParatRoute.post('/login',login)
adjointParatRoute.get('/getAll', getAll)
adjointParatRoute.get('/getOne', authProtection,getOne)
adjointParatRoute.post('/add',add)
adjointParatRoute.put('/update/:id',update)
adjointParatRoute.delete('/delete/:id',remove)





module.exports = adjointParatRoute