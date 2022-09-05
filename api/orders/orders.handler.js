const crud = require('../../crud/index');
const usersHandler = require('../users/users.handler');

async function saveOrder(order) {
    const idUser = order.userId;
    const usersList = await usersHandler.getUsers();
    const orderList = await getOrders();

    for (let user of usersList) {
        if (user.id === idUser) {
            let numberOrder = 0;
            for (let order of orderList) {
                if (order.userId === idUser) {
                    numberOrder++;
                    if (order.status == 'open') {
                        return {
                            error: "0002",
                            message: "FUNCIONALIDADE INDISPONÍVEL",
                            necessity: ["userId"]
                        }
                    }

                }
            }
            const newOrder = {
                userId: order.userId,
                status: 'open',
                number: numberOrder + 1
            };
            return await crud.save('orders', undefined, newOrder);
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
