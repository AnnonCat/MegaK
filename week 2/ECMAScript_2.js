const name = 'Test';
const age = 25;
const role = 'Admin';

const info = name + ' has a role of ' + role + ' and is born in year ' + (new Date().getFullYear() - age);
console.log(info);

const infoTemplate = `${name} has a role of ${role} and is born in year ` + (new Date().getFullYear() - age);
console.log(infoTemplate);