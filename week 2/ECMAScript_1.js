const obj = {
    id: 1,
    name: 'Tester Testowy',
    pwdHash: 'abcdef1749cdf9278ac98d7492afff9c729accccf',
    idAdmin: true,
    hasAvatar: true,
};

const filter = (obj) => {
    const {id, name, hasAvatar} = obj;
    return {id, name, hasAvatar};
}

console.log(filter(obj));