const Sequelize = require("sequelize") //for things like Sequelize.STRING
const db = require('../db')
//import your db

//define your model

const Category = db.define('category', {
    name : {
        type : Sequelize.STRING,
        allowNull : false
    },
    picUrl : {
        type : Sequelize.STRING
    },
    description : {
        type : Sequelize.STRING
    }
})

const Source = db.define('source', {
    name : {
        type : Sequelize.STRING,
        allowNull : false
    },
    ounces : {
        type : Sequelize.INTEGER
    },

    calories : {
        type : Sequelize.INTEGER
    },
    fats : {
        type : Sequelize.INTEGER
    },

    netCarbs : {
        type : Sequelize.INTEGER
    },
    protein : {
        type : Sequelize.INTEGER
    }
})

//define any class or instance methods

//export your model

module.exports = {
    Category,
    Source
}