const adminRoute = require('express').Router()
const {getAll, getOne, add, update, remove,register,login} = require('../controller/admin.controller')
const authProtection = require('../middleware/auth')
adminRoute.post('/register',register)
adminRoute.post('/login',login)
adminRoute.get('/getAll', getAll)
adminRoute.get('/getOne',authProtection, getOne)
adminRoute.post('/add', add)
adminRoute.put('/update/:id', update)
adminRoute.delete('/delete/:id', remove)




module.exports = adminRoute