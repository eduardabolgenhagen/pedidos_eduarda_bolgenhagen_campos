const crud = require('../../crud/index');
const usersHandler = require('../users/users.handler');
const orderProductsHandler = require('../ordersProducts/orderProducts.handler');

async function saveOrder(order) {
    const idUser = order.userId;
    const usersList = await usersHandler.getUsers();
    const orderList = await getOrders();

    for (let user of usersList) {
        if (user.id === idUser) {
            for (let order of orderList) {
                if (order.userId === idUser) {
                    if (order.status == 'open') {
                        return {
                            error: "0002",
                            message: "FUNCIONALIDADE INDISPONÍVEL",
                            necessity: ["userId"]
                        }
                    } else {
                        return await crud.save('orders', undefined, order);
                    }
                }
            }
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

async function editOrder(idOrder) {
    const listOrders = await getOrders();
    const listOrderProducts = orderProductsHandler.getOrderProducts();
//fazer um for para ver sse há produtos no pedido
        for(let order of listOrders) {
            if (order.id === idOrder) {
        if (order.status == 'open') {
                console.log('status alterado para fechado');
            //aqui vai a função de editar
        } else {
            console.log('esse pedido já está fechado');
        }
    } else {
        console.log('esse pedido não existe');
    }
}
};

async function removeOrder(idOrder) {
    return await crud.remove('orders', idOrder);
};

module.exports = {
    saveOrder,
    getOrders,
    getByIdOrder,
    editOrder,
    removeOrder
};
