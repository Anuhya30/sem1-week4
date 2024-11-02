const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log('Odd numbers:', oddNumbers); // Output: [1, 3, 5, 7, 9]

const doubledOddNumbers = oddNumbers.map(num => num * 2);
console.log('Doubled odd numbers:', doubledOddNumbers); // Output: [2, 6, 10, 14, 18]

const sum = doubledOddNumbers.reduce((accumulator, current) => accumulator + current, 0);
console.log('Sum of doubled odd numbers:', sum); // Output: 50
