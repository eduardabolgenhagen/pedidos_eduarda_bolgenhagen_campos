const crud = require('../../crud/index');
const usersHandler = require('../users/users.handler');
// const orderProductsHandler = require('../ordersProducts/orderProducts.handler');

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
                    }
                }
            }
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

//lembrar da requisição do handler de orderProducts e resolver circular dependecy
//id: create a new js with all imports
// async function editOrder(idOrder) {
//     const listOrders = await getOrders();
//     const listOrderProducts = await orderProductsHandler.getOrderProducts();

//     for (let order of listOrders) {
//         if (order.id === idOrder) {
//             for (let orderProducts of listOrderProducts) {
//                 if (orderProducts.orderId == idOrder) {
//                     if (order.status == 'open') {
//                         const newOrder = {
//                             number: order.number,
//                             userId: order.userId,
//                             status: 'close'
//                         };
//                         return await crud.save('orders', idOrder, newOrder);
//                     } else {
//                         return {
//                             error: "0002",
//                             message: "FUNCIONALIDADE INDISPONÍVEL",
//                             necessity: ["userId"]
//                         }
//                     }
//                 } else {
//                     return {
//                         error: "0002",
//                         message: "FUNCIONALIDADE INDISPONÍVEL",
//                         necessity: ["add orderProducts"]
//                     }
//                 }
//             }
//         } else {
//             return {
//                 error: "0002",
//                 message: "ID NÃO EXISTENTE",
//                 necessity: ["userId"]
//             }
//         }
//     }
// };

async function removeOrder(idOrder) {
    return await crud.remove('orders', idOrder);
};

module.exports = {
    saveOrder,
    getOrders,
    getByIdOrder,
    removeOrder
};
