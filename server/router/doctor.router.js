const doctorRoute = require('express').Router()
const {getAll, getOne, add, update, remove,register,login} = require('../controller/doctor.controller')
const authProtection = require('../middleware/auth')
doctorRoute.post('/register',register)
doctorRoute.post('/login',login)
doctorRoute.get('/getAll', getAll)
doctorRoute.get('/getOne',authProtection ,getOne)
doctorRoute.post('/add', add)
doctorRoute.put('/update/:id', update)
doctorRoute.delete('/delete/:id', remove)





module.exports = doctorRoute
