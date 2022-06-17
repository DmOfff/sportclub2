const router = require('express').Router()
const { getUsers } = require('../controllers/UsersController')


router.get('/', getUsers)

module.exports = router