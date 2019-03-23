var mongoose = require('mongoose');

let ProductSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 3},
    qty: {type: Number, required: true, minlength: 3},
    price: {type: Number, required: true, min: 0},
    },
    {timestamps: true});

mongoose.model('Product', ProductSchema);
var Product = mongoose.model('Product');
