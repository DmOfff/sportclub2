const {dbAddServiceToUser, dbGetServices, dbRemoveServiceByID} = require("../db/services");

class ServiceController {

    addServiceToUser (req, res) {

        const { id, name, count, type } = req.body

        dbAddServiceToUser(id, name, count, type)

        res.send('Ok')
    }

    getServiceByUserID (req, res) {

        const {id} = req.body

        dbGetServices(id)
            .then(r => {
                return res.json(r)
            })

    }

    cancelServiceByIDFromUserID (req, res) {
        const {serviceID} = req.body

        dbRemoveServiceByID(serviceID)
            .then(r => {
                return res.send('ok')
            })

    }

}


module.exports = new ServiceController()