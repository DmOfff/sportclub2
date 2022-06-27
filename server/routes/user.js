const router = require('express').Router()
const { getUsers, addContactRequest, regUser, loginUser } = require('../controllers/UsersController')


router.get('/', getUsers)
router.post('/contact', addContactRequest)
router.post('/reg', regUser)
router.post('/login', loginUser)

module.exports = router