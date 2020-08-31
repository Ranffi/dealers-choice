const Sequelize = require("sequelize")
const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/keto-diet')

//initialize your db, don't forget to include the possible heroku database URL

//export your db

module.exports = db