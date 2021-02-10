const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Пиши код ниже этой строки

const eachElementInFirstIsEven = firstArray.every(value => value % 2 === 0);
const eachElementInFirstIsOdd = firstArray.every(value => value % 2 !== 0);

const eachElementInSecondIsEven = secondArray.every(value => value % 2 === 0);
const eachElementInSecondIsOdd = secondArray.every(value => value % 2 !== 0);

const eachElementInThirdIsEven = thirdArray.every(value => value % 2 === 0);
const eachElementInThirdIsOdd = thirdArray.every(value => value % 2 !== 0);

console.log(eachElementInFirstIsEven);
console.log(eachElementInFirstIsOdd);
console.log(eachElementInSecondIsEven);
console.log(eachElementInSecondIsOdd);
console.log(eachElementInThirdIsEven);
console.log(eachElementInThirdIsOdd);

// ------------------------------------------------------------------------------------

// Используя метод every() дополни код так, чтобы:

// В переменной eachElementInFirstIsEven был результат проверки всех элементов массива firstArray 
// на чётность.
// В переменной eachElementInFirstIsOdd был результат проверки всех элементов массива firstArray 
// на нечётность.
// В переменной eachElementInSecondIsEven был результат проверки всех элементов массива secondArray 
// на чётность.
// В переменной eachElementInSecondIsOdd был результат проверки всех элементов массива secondArray 
// на нечётность.
// В переменной eachElementInThirdIsEven был результат проверки всех элементов массива thirdArray 
// на чётность.
// В переменной eachElementInThirdIsOdd был результат проверки всех элементов массива thirdArray 
// на нечётность.