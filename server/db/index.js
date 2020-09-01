const db = require('./db')
const fs = require('fs')
const {Category, Source} = require('./models/defined')
const sources = JSON.parse(fs.readFileSync('sources.json', 'utf8'))


Category.hasMany(Source)
Source.belongsTo(Category)

const syncAndSeed = async () => {
    await db.sync({force : true})


    // Categories

    const protien = await Category.create({
        name : 'Protein',
        picUrl : 'proteinPic.jpg',
        description : 'Not consuming your protein is a big missed steak! Protein is a macronutrient that is essential to building muscle mass. It is commonly found in animal products, though is also present in other sources, such as nuts and legumes.'
    })
    const veggiesAndFruits = await Category.create({
        name : 'Veggies and Fruits',
        picUrl : 'fruit-and-veg.jpg',
        description : `Lettuce not forget our fruits and veggies. Fruits and vegetables contain important vitamins and minerals. They also contain fiber. There are many varieties of fruit and vegetables available and many ways to prepare, cook and serve them. A diet high in fruit and vegetables can help protect you against cancer, diabetes and heart disease.`
    })
    const dairy = await Category.create({
        name : 'Dairy',
        picUrl : 'dairy.jpg',
        description : 'Be Legendairy! Consuming dairy products provides health benefits — especially improved bone health. Foods in the Dairy Group provide nutrients that are vital for health and maintenance of your body. These nutrients include calcium, potassium, vitamin D, and protein.'
    })
    const nuts_seeds_baking = await Category.create({
        name : 'Nut/Seed Baking',
        picUrl : 'nutsAndSeeds.jpeg',
        description : `Are You Nuts? You are nuts if you don't eat these nutritious powerfoods Nuts and seeds are good sources of protein, healthy fats, fibers, vitamins and minerals`
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