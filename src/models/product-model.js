const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title:{
        type: String,
    },
    description: {
        type: String
    },
    image: {
        type:String,
    },
    price: {
        type: Number,
        default: 0
    },
    rating: {
        rate: Number,
        count: Number
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
    }
},{
    timestamps:true
});

const Product = mongoose.model('Product',ProductSchema);

module.exports = Product;