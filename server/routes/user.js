const router = require('express').Router()
const { getUsers, addContactRequest, regUser } = require('../controllers/UsersController')


router.get('/', getUsers)
router.post('/contact', addContactRequest)
router.post('/reg', regUser)

module.exports = router