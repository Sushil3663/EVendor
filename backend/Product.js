const mongoos = require('mongoose')

let productSchema = new mongoos.Schema({
    name:String,
    category:String,
    image:String,
    price:String,
    description:String
   
})

module.exports = mongoos.model('products',productSchema);