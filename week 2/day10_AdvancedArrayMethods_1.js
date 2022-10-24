const numbers = [1, 2, 3];

const newNumbers = numbers.map((number) => {
    if (number > 1) {
        return 0;
    } else {
        return number;
    }
});

console.log(newNumbers);
console.log(numbers);
