const express = require('express');
const router = express.Router();
const orderHandler = require('./orders.handler');

//save
router.post('/', async (req, res) => {
    const order = req.body;
    res.json(await orderHandler.saveOrder(order));
});

//get
router.get('/', async (req, res) => {
    res.json(await orderHandler.getOrders());
});

//get by id
router.get('/:id', async (req, res) => {
    const idOrder = req.params.id;
    res.json(await orderHandler.getByIdOrder(idOrder));
});

//edit
router.put('/:id', async (req, res) => {
    const idOrder = req.params.id;
    res.json(await orderHandler.editOrder(idOrder));
})

//remove
router.delete('/:id', async (req, res) => {
    const idOrder = res.params.id;
    res.json(await orderHandler.removeOrder(idOrder));
});

module.exports = router;
