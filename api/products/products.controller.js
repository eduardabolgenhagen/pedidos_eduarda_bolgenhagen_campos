const express = require('express');
const router = express.Router();
const productsHandler = require('./products.handler');

//save 
router.post('/', async (req, res) => {
    const product = req.body;
    res.json(await productsHandler.saveProduct(product));
});

//get
router.get('/', async (req, res) => {
    res.json(await productsHandler.getProducts());
});

//get by id
router.get('/:id', async (req, res) => {
    const idProduct = req.params.id;
    res.json(await productsHandler.getByIdProduct(idProduct));
});

//delete
router.delete(':id', async (req, res) => {
    const idProduct = req.params.id;
    res.json(await productsHandler.removeProduct(idProduct));
});

module.exports = router;
