const sqlite = require('sqlite3')
const db = new sqlite.Database('./sportclub.db')


const createTables = () => {
    // создание таблицы пользователей
    db.run(`create table if not exists users (id INTEGER NOT NULL UNIQUE, name TEXT, phone TEXT, email TEXT, accessToken TEXT, PRIMARY KEY("id" AUTOINCREMENT))`);
    // создание таблицы абонементов / услуг
    db.run(`create table if not exists services (id INTEGER NOT NULL UNIQUE, user INTEGER, name TEXT, status INTEGER, expireDate INTEGER, PRIMARY KEY("id" AUTOINCREMENT))`);
    // создание таблицы запросов связи
    db.run(`create table if not exists requests (id INTEGER NOT NULL UNIQUE, name TEXT, phone TEXT, email TEXT, description TEXT, requestDate INTEGER, checked INTEGER, PRIMARY KEY("id" AUTOINCREMENT))`);
}

module.exports.createTables = createTables
module.exports.db = db
