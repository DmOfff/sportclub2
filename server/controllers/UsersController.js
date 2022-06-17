const {getUsers} = require('../db/users')


class UsersController {

    getUsers = (req, res) => {

        getUsers((users) => {
            res.send(JSON.stringify(users))
        })

    }
}



module.exports = new UsersController()