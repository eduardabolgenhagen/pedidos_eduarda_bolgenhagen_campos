const crud = require('../../crud/index');
const orderHandler = require('./orders.handler');
const orderProductsHandler = require('../ordersProducts/orderProducts.handler');

async function editOrder(idOrder) {
    const listOrders = await orderHandler.getOrders();
    const listOrderProducts = await orderProductsHandler.getOrderProducts();
    let orderFound = false;
    let orderHasProducts = false;

    for (let order of listOrders) {
        if (order.id === idOrder) {
            for (let orderProducts of listOrderProducts) {
                if (orderProducts.orderId == idOrder) {
                    orderHasProducts = true;
                    if (order.status == 'open') {
                        const newOrder = {
                            number: order.number,
                            userId: order.userId,
                            status: 'close'
                        };
                        return await crud.save('orders', idOrder, newOrder);
                    } else {
                        return {
                            error: "0002",
                            message: "FUNCIONALIDADE INDISPONÍVEL",
                            necessity: ["userId"]
                        }
                    }
                } else {
                    return {
                        error: "0002",
                        message: "FUNCIONALIDADE INDISPONÍVEL",
                        necessity: ["add orderProducts"]
                    }
                }
            }
            orderFound = true;
            break;
        }
    }

    if (!orderFound) {
        return {
            error: "0002",
            message: "ID NÃO EXISTENTE",
            necessity: ["ordeId"]

        }
    }

    if (!orderHasProducts) {
        return {
            error: "0002",
            message: "O PEDIDO NÃO POSSUI PRODUTOS",
            necessity: ["ordeId"]

        }
    }

};

module.exports = {
    editOrder
};