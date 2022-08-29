const express = require('express');
const router = express.Router();
const usersHandler = require('./users.handler');

//save
router.post('/', async (req, res) => {
    const user = req.body;
    res.json(await usersHandler.saveUsers(user));
});

//get
router.get('/', async (req, res) => {
    res.json(await usersHandler.getUsers());
});

//get by id
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    res.json(await usersHandler.getByIdUsers(id));
});

//delete
router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    res.json(await usersHandler.removeUsers(id));
});

module.exports = router;