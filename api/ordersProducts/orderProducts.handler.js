const crud = require('../../crud/index');
const orderHandler = require('../orders/orders.handler');
const productsHandler = require('../products/products.handler')

async function saveOrderProduct(orderProduct) {
    const idOrder = orderProduct.orderId;
    const idProduct = orderProduct.productId;
    const listOrders = await orderHandler.getOrders();
    const listProducts = await productsHandler.getProducts();
    const listOrderProducts = await getOrderProducts();

    for (let order of listOrders) {
        if (order.id === idOrder) {
            for (let product of listProducts) {
                if (product.id === idProduct) {
                    if (order.status == 'open') {
                        for (let orderExist of listOrderProducts) {
                            if (orderExist.productId === orderProduct.productId && orderExist.orderId === idOrder) {
                                const newOrderProduct = {
                                    productId: orderExist.productId,
                                    quantity: orderProduct.quantity + orderExist.quantity,
                                    orderId: orderExist.id
                                };
                                return await crud.save('orderProducts', orderExist.id, newOrderProduct);
                            }
                        }
                    }
                    console.log('vai ser adicionado a nova ordem', orderProduct)
                    return await crud.save('orderProducts', undefined, orderProduct);
                }
            }
        }
    }
    return {
        error: "0001",
        message: "ID NÃO EXISTENTE",
        necessity: ["Params incorrects"]
    }
};

async function getOrderProducts() {
    return await crud.get('orderProducts');
};

async function getByIdOrderProduct(idOrderProduct) {
    return await crud.getById('orderProducts', idOrderProduct);
};

async function removeOrderByProduct(orderProduct) {
    const listOrders = await orderHandler.getOrders();
    const listOrderProducts = await getOrderProducts();
    let ref = false;

    for (let order of listOrders) {
        if (order.status == 'open') {
            for (let orderProducts of listOrderProducts) {
                if (orderProducts.id === orderProduct.id) {
                    ref = true;
                    if (orderProducts.quantity > orderProduct.quantity) {
                        const newOrderProduct = {
                            productId: orderProducts.id,
                            quantity: orderProducts.quantity - orderProduct.quantity,
                            orderId: orderProducts.orderId
                        }
                        return await crud.save('orderProducts', orderProduct.id, newOrderProduct)
                    } else {
                        return await crud.remove('orderProducts', orderProduct.id);
                    }
                }
            }
        }
    }

    if (!ref) {
        return {
            error: "0002",
            message: "FUNCIONALIDADE INDISPONÍVEL",
            necessity: ["orderProduct"]
        }
    }
};

module.exports = {
    saveOrderProduct,
    getOrderProducts,
    getByIdOrderProduct,
    removeOrderByProduct
};
