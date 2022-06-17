const {db} = require('./db')

const dbGetUsers = (cb) => {

    db.all(`select id,name,phone,email from users`, (err, rows) => {
        if (err)
            console.log(err)
        cb(rows)
    })

}

const dbAddContactRequest = (args) => {

    const { name, phone, email, comment } = args

    db.run(`insert into requests values(${null}, "${name}", "${phone}", "${email}", "${comment}", "${Date.now()}")`)

}

module.exports.getUsers = dbGetUsers
module.exports.dbAddContactRequest = dbAddContactRequest