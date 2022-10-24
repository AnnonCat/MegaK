const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

//const newNumbers = numbers.filter(number => number % 2 === 0);
//const newNumbersMultipliedBy2 = newNumbers.map(number => number * 2);

const onlyEven = number => number % 2 === 0;
const multipleBy2 = number => number * 2;
const show = number => console.log(number);

numbers
    .filter(onlyEven)
    .map(multipleBy2)
    .forEach(show);

