const sum = (...args) => {
    let suma = 0;
for (let i = 0; i < args.length; i++){
    if (typeof args[i] !== 'number'){
        console.log('All elements must be numbers!')
    } else {
        suma = suma + args[i];
    }
  }
    return suma;
};

console.log(sum(1));
console.log(sum(1, 2, 3, 4, 5, 6));

console.log(sum(12, 451, 5367, 342));