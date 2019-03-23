const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports = {
    create: (req, res) => {
        console.log('create');
        console.log(req.body);
        let product = new Product({name: req.body.name, qty: req.body.qty, price: req.body.price});
        product.save(function(err){
            if(err){
                console.log('errors', err);
                res.json(err)
            }else {
                console.log('success. new product.');
                res.json({product: product}) 
            }
        })
    },
    index: (req,res)=>{
        console.log('products.index');
        Product.find({}, function(err, products){
            if(err){
                console.log('errors', err);
                res.json(err);
            }else {
                console.log('success.');
                res.json(products);
            }
        })
    },
    show: (req, res)=>{
        console.log('products.show');
        Product.findOne({_id: req.params.id}, function(err, product){
            res.json(product);
        })
    },
    update: (req, res) =>{
        console.log('update');
        Product.findById({_id: req.params.id}, function(err, product){
            // if(req.body.name) {
            product.name = req.body.name;
            // }
            // if(req.body.qty) {
            product.qty = req.body.qty;
            // }
            // if(req.body.price) {
            product.price = req.body.price;
            // }           
            product.save(function (err) {
                if (err) {
                    console.log('error holmes!', err);
                    res.json({message: "error", error: err});
                }else {
                    console.log('you did it. product edited');
                    res.json(product)
                }   
            })
             
        })
    },
    delete: (req, res)=> {
        console.log('deletion');
        Product.remove({_id: req.params.id}, function(err) {
          if (err){
            console.log("Returned error", err);
            res.json({message: "Error", error: err});
          } else {
            console.log('Product deleted!');
            res.json({message: "Success"})
          }
        })
    }
}