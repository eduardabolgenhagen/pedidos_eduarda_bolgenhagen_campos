// const express = require('express');
// const router = express.Router();
// const productsHandler = require('./products.handler');

// //save 
// router.post('/', (req, res) => {
//     const product = req.body;
//     res.json(await productsHandler.saveProduct(product));
// });

// //get
// router.get('/', (req, res) => {
//     res.json(await productsHandler.getproducts());
// });

// //get by id
// router.get('/:id', (req, res) => {
//     const idProduct = req.params.id;
//     res.json(await productsHandler.getByIdProduct(idProduct));
// });

// //delete
// router.delete(':id', (req, res) => {
//     const idProduct = req.params.id;
//     res.json(await productsHandler.removeProduct(idProduct));
// });
