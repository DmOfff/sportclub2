const router = require('express').Router()
const { getUsers, addContactRequest } = require('../controllers/UsersController')


router.get('/', getUsers)
router.post('/contact', addContactRequest)

module.exports = router