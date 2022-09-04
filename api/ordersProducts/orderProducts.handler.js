const crud = require('../../crud/index');
const orderHandler = require('../orders/orders.handler');
const productsHandler = require('../products/products.handler')

async function saveOrderProduct(orderProducts) {
    const idOrder = orderProducts.orderId;
    const idProduct = orderProducts.productId;
    const listOrders = await orderHandler.getOrders();
    const listProducts = await productsHandler.getProducts();

    for (let order of listOrders) {
        if (order.id === idOrder) {
            console.log('a ordem existe')
            for (let product of listProducts) {
                if (product.id === idProduct) {
                    console.log('o produto existe')
                    if (order.status == 'open') {
                        console.log('esse cliente pode fazer pedido')
                        return await crud.save('orderProducts', undefined, orderProducts);
                    } else {
                        console.log('esse cliente já possui pedido em aberto')
                        return {
                            error: "0002",
                            message: "FUNCIONALIDADE INDISPONÍVEL",
                            necessity: ["orderId"]
                        }
                    }
                }
            }
        }
    }
    return {
        error: "0001",
        message: "ID NÃO EXISTENTE",
        necessity: ["idOrder, idProduct"]
    }
};

async function getOrderProducts() {
    return await crud.get('orderProducts');
};

async function getByIdOrderProduct(idOrderProduct) {
    return await crud.getById('orderProducts', idOrderProduct);
};

async function removeOrderByProduct(idOrderProduct) {
    const listOrders = await orderHandler.getOrders();

    for (let order of listOrders) {
        if (order.productId === idOrderProduct) {
            if (order.status == 'open') {
                console.log('pode remover');
                return await crud.remove('orderProducts', idOrderProduct);
            } else {
                console.log('não pode remover, pedido já fechado')
            }
        }
    }
};

module.exports = {
    saveOrderProduct,
    getOrderProducts,
    getByIdOrderProduct,
    removeOrderByProduct
};