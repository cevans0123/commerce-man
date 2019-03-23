const products = require('../controllers/products');
const path = require('path');

module.exports = function(app){
    app.post('/api/products/new', products.create);
    app.get('/api/products', products.index);
    app.get('/api/products/:id', products.show);
    app.put('/api/products/:id/edit', products.update);
    app.delete('/api/products/:id', products.delete);
    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}