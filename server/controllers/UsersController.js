const {getUsers} = require('../db/users')


class UsersController {

    getUsers = (req, res) => {


        res.send(getUsers())
    }
}



module.exports = new UsersController()