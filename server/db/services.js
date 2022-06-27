const {db} = require('./db')


const dbAddServiceToUser = (id,name, count, type ) => {

    let date = new Date()
    date.setDate(date.getDate() + 30)

    db.run(`insert into services values(${null}, "${id}", "${name}", 1, "${count}", "${type}", "${date}")`)

}


const dbGetServices = (id) => {

    return new Promise((resolve, reject) => {

        db.all(`SELECT * from services WHERE user="${id}" and status="1"`, (err, rows) => {
            resolve(rows)
        })

    })

}


const dbRemoveServiceByID = (serviceID) => {
    return new Promise(resolve => {
        db.run(`DELETE FROM services WHERE id="${serviceID}"`, (err, rows) => {
            resolve('ok')
        })
    })
}


module.exports.dbAddServiceToUser = dbAddServiceToUser
module.exports.dbGetServices = dbGetServices
module.exports.dbRemoveServiceByID = dbRemoveServiceByID