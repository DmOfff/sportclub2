const {db} = require('./db')

const getUsers = (cb) => {

    let users = []

    db.all(`select id,name,phone,email from users`, (err, rows) => {
        if (err)
            console.log(err)
        cb(rows)
    })

}

module.exports.getUsers = getUsers