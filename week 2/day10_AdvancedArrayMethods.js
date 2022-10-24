const numbers = [1, 2, 3];

numbers.forEach((num, i) => {
    numbers[i] = num + 2;
});

console.log(numbers);