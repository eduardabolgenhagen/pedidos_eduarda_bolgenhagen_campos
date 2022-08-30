const { async } = require('@firebase/util');
const crud = require('../../crud/index');

async function saveOrder(order) {
    return await crud.save('orders', undefined, order);
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
