const router = require('express').Router()
const { addServiceToUser, getServiceByUserID, cancelServiceByIDFromUserID } = require('../controllers/ServiceController')


router.post('/buy', addServiceToUser)
router.post('/user', getServiceByUserID)
router.post('/user/remove', cancelServiceByIDFromUserID)

module.exports = router