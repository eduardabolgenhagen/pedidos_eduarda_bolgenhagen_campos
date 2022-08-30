const crud = require('../../crud/index');
const orderHandler = require('../orders/orders.handler');
const productsHandler = require('../products/products.handler');

async function saveOrderProduct(orderProducts) {
    const idOrder = orderProducts.orderId;
    const idProduct = orderProducts.productId;
    const listOrders = await orderHandler.getOrders();
    const listProducts = await productsHandler.getProducts();

    for (let order of listOrders) {
        if (order.id === idOrder) {
            for (let product of listProducts) {
                if (product.id === idProduct) {
                    return await crud.save('orderProducts', undefined, orderProducts);
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
    return await crud.remove('orderProducts', idOrderProduct);
};

module.exports = {
    saveOrderProduct,
    getOrderProducts,
    getByIdOrderProduct,
    removeOrderByProduct
};