const crud = require('../../crud/index');
const usersHandler = require('../users/users.handler');

async function saveOrder(order) {
    const idUser = order.userId;
    const usersList = await usersHandler.getUsers();

    for (let user of usersList) {
        if (user.id === idUser) {
            return await crud.save('orders', undefined, order);
        }
    }
    return {
        error: "0001",
        message: "ID NÃO EXISTENTE",
        necessity: ["userId"]
    }
};

async function getOrders() {
    return await crud.get('orders');
};

async function getByIdOrder(idOrder) {
    return await crud.getById('orders', idOrder);
};

async function removeOrder(idOrder) {
    return await crud.remove('orders', idOrder);
};

module.exports = {
    saveOrder,
    getOrders,
    getByIdOrder,
    removeOrder
};
