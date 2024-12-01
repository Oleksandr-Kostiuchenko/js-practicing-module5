//! ====================================== Познайомимось з колбек-функціями ====================================== !//
//TODO: 1. Напишіть функцію doMath(a, b, callback), яка приймає два числа a, b і колбек-функцію. 
//? Колбек повинен виконувати одну з математичних операцій (додавання, віднімання, множення, ділення) над числами.
// const doMath = (a, b, callback) => callback(a, b);

// const sum = (a, b) => a + b;
// const rest = (a, b) => a - b;
// const multiply = (a, b) => a * b;
// const divide = (a, b) => a / b;

// console.log(doMath(8, 2, sum));
// console.log(doMath(8, 2, rest));
// console.log(doMath(8, 2, multiply));
// console.log(doMath(8, 2, divide));

//TODO: 2. Напишіть функцію processNumbers(numbers, callback), яка:
//? Приймає масив чисел numbers.
//? Приймає колбек callback, який визначає дію над кожним числом.
//? Функція повинна повертати новий масив, у якому кожен елемент є результатом виклику callback(number) Збільшити кожне число на 10.
// const processNumbers = (numbers, callback) => callback(numbers);

// console.log(processNumbers([2, 4, 6, 8], numbers => numbers.map(num => num + 10)));

//! ====================================== Розберемо стрілочні функції ====================================== !//
//TODO: 3. Створіть функцію addAll, яка повертає суму всіх переданих аргументів, використовуючи псевдомасив arguments. 
//? Потім перетворіть її на стрілочну функцію (і вирішіть, як врахувати відсутність псевдомасиву в стрілках).
// // function addAll(){
// //     let sum = 0;

// //     for(num of arguments){
// //         sum += num;
// //     }

// //     return sum;
// // }
// // console.log(addAll(2, 10));

// const addAll = (...args) => args.reduce((acc, el) => acc + el);
// console.log(addAll(2, 10));

//! ====================================== Метод forEach(callback) ====================================== !//
//TODO: 5. Виведіть назви всіх товарів з масиву products у консоль за допомогою forEach.
// const products = [
//     { name: "Laptop", quantity: 10 },
//     { name: "Smartphone", quantity: 25 },
//     { name: "Tablet", quantity: 15 },
//     { name: "Headphones", quantity: 50 },
//     { name: "Smartwatch", quantity: 20 },
// ];

// const getList = productsList => productsList.forEach(el => console.log(el.name));
// getList(products);

//TODO: 6. Обчисліть загальну кількість усіх товарів у масиві products за допомогою forEach.
// let sum = 0;
// const getQuantity = productsList => productsList.forEach(el => sum += el.quantity);
// getQuantity(products);
// console.log(sum);

//! ====================================== Методи map і flatMap ====================================== !//
//TODO: 7. З масиву об'єктів allCars отримайте масив назв автомобілів (поле model).
// const allCars = [
//     { make: 'Toyota', model: 'Corolla', year: 2015 },
//     { make: 'Honda', model: 'Civic', year: 2018 },
//     { make: 'Ford', model: 'Focus', year: 2020 },
//     { make: 'Mazda', model: 'Mazda3', year: 2022 },
//     { make: 'Hyundai', model: 'Elantra', year: 2019 }
// ];

// const createArr = carList => carList.map(car => car.model);
// console.log(createArr(allCars));

//TODO: 8. Є масив із масивами чисел. За допомогою flatMap отримайте один масив із усіма числами.
// const numbersArray = [
//     [12, 24, 36],
//     [48, 60],
//     [72, 84, 96],
//     [108, 120, 132]
// ];
// let total = 0;

// const combineArr = numArr => numArr.flatMap(num => num);
// console.log(combineArr(numbersArray));

//! ======================================  Метод reduce ====================================== !//
// TODO: 9. Напишіть функцію sumNumbers(numbers), яка повертає суму всіх чисел у масиві за допомогою reduce.
// const numArr =[Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)];
// console.log(numArr);

// const sum = numbers => numbers.reduce((acc, el) => acc + el);
// console.log(sum(numArr));

// TODO: 10. Є масив об'єктів із ключами name та age. Об'єднайте всі імена в один рядок, розділяючи комами, а age теж.
// const people = [
//     { name: 'Alex', age: 14 },
//     { name: 'Yevhen', age: 39 },
//     { name: 'Oleg', age: 65 },
//     { name: 'Olga', age: 34 },
//     { name: 'Valentina', age: 54 }
// ];
// let names= [];

// const createStr = list => list.reduce((acc, el, indx, arr) => {
//     names.push(el.name, el.age)
//     return names.join(', ');
// }, 0);

// console.log(createStr(people));



//! ====================================== Інші перебираючі методи масивів ====================================== !//
// TODO: 11. Створіть функцію filterExpensiveCars(cars, threshold), яка повертає автомобілі, дорожчі за threshold.
//? FILTER
// const allCars = [
//     { make: 'Honda', model: 'CR-V', price: 24045 },
//     { make: 'Honda', model: 'Accord', price: 22455 },
//     { make: 'Mazda', model: 'Mazda 6', price: 24195 },
//     { make: 'Mazda', model: 'CX-9', price: 31520 },
//     { make: 'Toyota', model: '4Runner', price: 34210 },
//     { make: 'Toyota', model: 'Sequoia', price: 45560 },
//     { make: 'Ford', model: 'F-150', price: 27110 },
//     { make: 'Ford', model: 'Fusion', price: 22120 },
//     { make: 'Ford', model: 'Explorer', price: 31660 }
// ];

// const filterExpensiveCars = (cars, threshold) => cars.filter(car => car.price > threshold);
// console.table(filterExpensiveCars(allCars, 25000));

// TODO: 12. Напишіть функцію findCarByModel(cars, model), яка повертає об'єкт автомобіля з вказаною назвою моделі або undefined.
//? FIND
// const findCarByModel = (cars, model) => cars.find(car => car.model.toLowerCase() === model.toLowerCase());
// console.log(findCarByModel(allCars, 'f-150'));

// TODO: 13. Перевірте, чи всі автомобілі в масиві дешевші за вказану ціну за допомогою every. Перевірте, чи є хоча б один дешевший за 20,000 за допомогою some.
//? EVERY
// const checkEveryPrice = (cars, price) => cars.every(car => car.price < price);
// console.log(checkEveryPrice(allCars, 50000));

//? SOME
// const checkSomePrice = (cars, price) => cars.some(car => car.price < price);
// console.log(checkSomePrice(allCars, 20000));

//! ====================================== Ланцюжки методів ====================================== !//
// TODO: 14.  Фільтрація і перетворенняю Є масив автомобілів. Використовуючи ланцюжки методів:
//? Виберіть автомобілі дорожчі за 30,000.
//? Відсортуйте назви у алфавітному порядку.
// const cars = [
//     { make: 'Honda', model: 'CR-V', price: 24045 },
//     { make: 'Honda', model: 'Accord', price: 22455 },
//     { make: 'Mazda', model: 'Mazda 6', price: 24195 },
//     { make: 'Mazda', model: 'CX-9', price: 31520 },
//     { make: 'Toyota', model: '4Runner', price: 34210 },
//     { make: 'Toyota', model: 'Sequoia', price: 45560 },
//     { make: 'Toyota', model: 'Tacoma', price: 24320 },
//     { make: 'Ford', model: 'F-150', price: 27110 },
//     { make: 'Ford', model: 'Fusion', price: 22120 },
//     { make: 'Ford', model: 'Explorer', price: 31660 }
// ];

// const filterCars = carList => carList.filter(car => car.price > 30000).toSorted((a, b) => a.make.localeCompare(b.make));
// console.table(filterCars(cars));

// TODO: 14.  Є масив товарів із полями category та quantity. Використовуючи ланцюжок методів, створіть об'єкт, де ключ — це категорія, а значення — сумарна кількість товарів у цій категорії:
// const products = [
//     { category: 'Electronics', quantity: 10 },
//     { category: 'Furniture', quantity: 5 },
//     { category: 'Electronics', quantity: 20 },
//     { category: 'Clothing', quantity: 15 },
//     { category: 'Furniture', quantity: 7 },
//     { category: 'Clothing', quantity: 10 },
// ];

// const categoryObj = products.reduce((acc, product) => {
//     if (acc[product.category]) {
//         acc[product.category] += product.quantity;
//     } else {
//         acc[product.category] = product.quantity;
//     }
//     return acc;
// }, {});

// console.log(categoryObj);
