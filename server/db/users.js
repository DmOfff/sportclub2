const {db} = require('./db')


const getUsers = () => {

    const users = []

    db.each(`select * from users`, (err, row) => {
        console.log(row)
    })
    return users

}

module.exports.getUsers = getUsers