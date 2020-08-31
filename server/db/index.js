const db = require('./db')
const fs = require('fs')
const {Category, Source} = require('./models/Example')
const sources = JSON.parse(fs.readFileSync('sources.json', 'utf8'))


Category.hasMany(Source)
Source.belongsTo(Category)

const syncAndSeed = async () => {
    await db.sync({force : true})


    // Categories

    const protien = await Category.create({
        name : 'Protein',
        picUrl : 'protein.jpg'
    })
    const veggiesAndFruits = await Category.create({
        name : 'Veggies and Fruits',
        picUrl : 'fruit-and-veg.jpg'
    })
    const dairy = await Category.create({
        name : 'Dairy',
        picUrl : 'dairy.jpg'
    })
    const nuts_seeds_baking = await Category.create({
        name : 'Nut/Seed Baking',
        picUrl : 'nutsAndSeeds.jpeg'
    })

    // Sources
    const catergories = {
       protein : protien,
       veggiesAndFruits : veggiesAndFruits,
       dairy : dairy,
       nuts_seeds_baking : nuts_seeds_baking 
    }

    await Promise.all(sources.map(source => Source.create({
        name : source.name,
        ounces : source.ounces,
        calories : source.calories,
        fats : source.fats,
        netCarbs : source.netCarbs,
        protein : source.protein,
        categoryId : catergories[source.catId].id
    })))
}


//import your db
//import your models

//state your model associations (hasOne etc)

//export your db and Models (so they all can be imported from a single central location)

module.exports = {
    db,
    syncAndSeed,
    Category,
    Source
}