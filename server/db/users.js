const {db} = require('./db')
const crypto = require('crypto')


const checkUser = async (phone, email, cb) => {
    db.all(`SELECT * FROM users WHERE phone="${phone}" or email="${email}"`, (errm, result) => {
        cb(result.length)
    })
}

const dbGetUsers = (cb) => {

    db.all(`select id,name,phone,email from users`, (err, rows) => {
        if (err)
            console.log(err)
        cb(rows)
    })

}

const dbAddContactRequest = (args) => {

    const { name, phone, email, comment } = args

    db.run(`insert into requests values(${null}, "${name}", "${phone}", "${email}", "${comment}", "${Date.now()}", 0)`)

}

const dbAddUser = async (args, cb) => {

    const {name, phone, email, password} = args

    return new Promise((resolve, reject) => {
        checkUser(phone, email, function (result) {

            if (result > 0)
                return resolve ( {
                    err: true
                })

            const hashedPassword = crypto.createHash('sha1').update(password).digest('hex')
            const now = Date.now()

            db.run(`insert into users values(NULL, "${name}", "${phone}", "${email}", NULL, "${hashedPassword}", ${now})`)
            resolve(1)
        })
    })
}

const dbLoginUser = async (phone, password, cb) => {

    const hashedPassword = crypto.createHash('sha1').update(password).digest('hex')

    db.get('SELECT name, acc')

}



module.exports.getUsers = dbGetUsers
module.exports.dbAddContactRequest = dbAddContactRequest
module.exports.dbAddUser = dbAddUser
module.exports.dbLoginUser = dbLoginUser