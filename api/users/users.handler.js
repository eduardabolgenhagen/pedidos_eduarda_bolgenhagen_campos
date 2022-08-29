const crud = require('../../crud/index');

async function saveUsers(user) {
    return await crud.save('users', undefined, user);
};

async function getUsers() {
    return await crud.get('users');
};

async function getByIdUsers(idUser) {
    return await crud.getById('users', idUser);
};

async function removeUsers(idUser) {
    return await crud.remove('users', idUser);
};

module.exports = {
    saveUsers,
    getUsers,
    getByIdUsers,
    removeUsers
};