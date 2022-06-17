const {dbGetUsers, dbAddContactRequest} = require('../db/users')


class UsersController {

    addContactRequest = (req, res) => {

        dbAddContactRequest(req.body)

        res.json({
            err: false,
            msg: 'ok'
        })

    }

    getUsers = (req, res) => {

        dbGetUsers((users) => {
            res.send(JSON.stringify(users))
        })

    }
}



module.exports = new UsersController()