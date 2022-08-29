const crud = require('../../crud/index');

async function saveOrderProduct(orderProducts) {
    return await crud.save('orderProducts', orderProducts);
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