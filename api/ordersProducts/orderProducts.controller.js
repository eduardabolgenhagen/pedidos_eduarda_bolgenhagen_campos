const express = require('express');
const router = express.Router();
const orderProductsHandler = require('./orderProducts.handler');

//save
router.post('/', async (req, res) => {
    const orderProduct = req.body;
    res.json(await orderProductsHandler.saveOrderProduct(orderProduct));
});

//get
router.get('/', async (req, res) => {
    res.json(await orderProductsHandler.getOrderProducts());
});

//get by id
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    res.json(await orderProductsHandler.getByIdOrderProduct(id));
});

//edit order product
router.put('/', async (req, res) => {
    const orderProduct = req.body;
    res.json(await orderProductsHandler.saveOrderProduct(orderProduct));
})

//remove 
router.delete('/', async (req, res) => {
    const orderProduct = req.body;
    res.json(await orderProductsHandler.removeOrderByProduct(orderProduct));
});

module.exports = router;
