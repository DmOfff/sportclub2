const {dbGetUsers, dbAddContactRequest, dbAddUser, dbLoginUser} = require('../db/users')


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

    regUser = async (req, res) => {

        dbAddUser(req.body)
            .then(result => {
            if (result?.err)
                return res.status(400).json({err: true, msg: 'Пользователь с таким логином или паролем уже существует!'})
            else
                return res.status(200).json({msg: 'Успещная регистрация'})
        })


    }

    loginUser = async (req, res) => {

        const {phone, password, createDate} = req.body

        dbLoginUser(phone, password)
            .then(r => {
                res.json({
                    ...r
                })
            })
            .catch(err => {
                res.json({
                    err: true,
                    msg: 'Номер телефона или пароль не верный'
                })
            })

    }

}



module.exports = new UsersController()