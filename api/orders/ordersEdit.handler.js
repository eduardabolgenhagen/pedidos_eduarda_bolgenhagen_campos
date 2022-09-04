const crud = require('../../crud/index');
const orderHandler = require('./orders.handler');
const orderProductsHandler = require('../ordersProducts/orderProducts.handler');

async function editOrder(idOrder) {
    const listOrders = await orderHandler.getOrders();
    const listOrderProducts = await orderProductsHandler.getOrderProducts();

    for (let order of listOrders) {
        if (order.id === idOrder) {
            for (let orderProducts of listOrderProducts) {
                console.log('está dentro do segundo for')
                //         if (orderProducts.orderId == idOrder) {
                //             if (order.status == 'open') {
                //                 const newOrder = {
                //                     number: order.number,
                //                     userId: order.userId,
                //                     status: 'close'
                //                 };
                //                 console.log('ok orderEdit')
                //                 console.log(newOrder)
                //                 // return await crud.save('orders', idOrder, newOrder);
                //             } else {
                //                 return {
                //                     error: "0002",
                //                     message: "FUNCIONALIDADE INDISPONÍVEL",
                //                     necessity: ["userId"]
                //                 }
                //             }
                //         } else {
                //             return {
                //                 error: "0002",
                //                 message: "FUNCIONALIDADE INDISPONÍVEL",
                //                 necessity: ["add orderProducts"]
                //             }
                //         }
                //     }
                // } else {
                //     return {
                //         error: "0002",
                //         message: "ID NÃO EXISTENTE",
                //         necessity: ["ordeId"]

            }
        }
    }
};

module.exports = {
    editOrder
};