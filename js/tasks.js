// //! Знайомство з масивами

// //TODO: Створи масив із назвами кількох фруктів. Виведи в консоль перший і останній елемент масиву, використовуючи індекси.
// const fruits = ['apple' , 'banana', 'grapefruit', 'pineapple', 'mango', 'pear'];

// console.log(fruits[0]);
// console.log(fruits[fruits.length - 1]);

// //? Заміни значення другого елемента в масиві на інше. Виведи масив у консоль.
// fruits[1] = 'limon';
// console.log(fruits);


// //? Створи змінну lastIndex та присвой їй індекс передостаннього елемента масиву. Використовуй властивість length масиву.
// const penultimateIndex = fruits.length - 1;
// console.log(fruits[penultimateIndex]);


//! Методи масивів

//TODO: Об'єднай масив із трьох рядків у рядок, розділений комами, використовуючи метод join.
// const arr = ['Hello', 'dear', 'world!']
// const str = arr.join(', ')

// console.log(str);

//? Напиши функцію splitWords(sentence), яка приймає рядок, розбиває його на слова та повертає масив цих слів, використовуючи split.
// function splitWords(sentence){
//     arr = sentence.split(', ');
//     return arr;
// }

// console.log(splitWords('Ono, Maruyama, Abe, Takato, Nagase, Saito, Nomura, Sasaki'));

//? Створи масив чисел від 1 до 10 за допомогою циклу. Виріж із нього підмасив від 3 до 7 включно, використовуючи slice.
// const maxNum = 10;
// let numArr = [];


// for(let i = 1; i <= maxNum; ++i){
//     numArr.push(i);
// }

// function sliceArr(startIndex, finishIndex){
//     numArr = numArr.slice(startIndex, finishIndex);
//     return numArr;
// }

// console.log(sliceArr(2 , 7));

//? Зєднай два масиви [1, 2, 3] та [4, 5, 6] у новий масив, використовуючи concat.
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// let totalArr = arr1.concat(arr2);
// console.log(totalArr);

//? Знайди індекс елемента "apple" у масиві ["banana", "apple", "grape"], використовуючи indexOf. Заміни його
// let fruit = ["banana", "apple", "grape"];
// let appleIndex = fruit.indexOf('apple');

// fruit[appleIndex] = 'melon';

// console.log(fruit);

//? Додай елемент "orange" у кінець масиву, використовуючи push. Видали перший елемент
// fruit.push('orange');
// console.log(fruit);

// fruit.shift();
// console.log(fruit);

/*
? Напиши функцію printInfo(names, phones) яка виводить
? у консоль ім'я та телефонний номер користувача. У параметри
? names та phones будуть передані рядки імен та телефонних номерів,
? розділені комами. Порядковий номер імен та телефонів у рядках
? вказують на відповідність. Кількість імен та телефонів
? гарантовано однакова.
*/
// function printInfo(names, phones){
//     names = names.split(',');
//     phones = phones.split(',');

//     for (let i = 0; i < names.length; ++i){
//         console.log(`${i + 1}. ${names[i]}: ${phones[i]}`)
//     }
// }

// printInfo('Jacob,William,Solomon,Artemis', '89001234567,89001112233,890055566377,890055566300');


//! Ітерація по масиву

//TODO: Напиши функцію findEvenNumbers(str), яка приймає рядок чисел і повертає новий масив, що містить лише парні числа.
// let evenArr = [];

// function findEvenNumber(str){
//     totalArr = str.split(', ');
    
//     for (let num of totalArr){
//         if (num % 2 === 0){
//             evenArr.push(num);
//         }
//     }

//     return evenArr;
// }

// console.log(findEvenNumber('5, 10, 4, 3, 9, 31, 6'));

//? Створи масив назв міст. Перебери масив за допомогою for...of або for, створюючи масив з тільки тими містами, які містять букву "a". Після перетвори масив на рядок та виведи в консоль.
// let cities = ['Odesa', 'Madrid', 'Donetsk', 'Lviv', 'Dnipro', 'Valencia', 'Algeciras', 'Vinnitsya'];
// let citiesWithA = [];

// function sortCitiesA(){
//     for(let city of cities){
//         if(city.toLowerCase().includes('a')){
//             citiesWithA.push(city);
//         }
//     }
    
//     // for(let i = 0; i < cities.length; ++i){
//     //     let city = cities[i].toLowerCase();
        
//     //     if (city.includes('a')) {
//     //         citiesWithA.push(cities[i]);
//     //     }
//     // }

//     return (`Here are cities with letter 'a': ${citiesWithA.join(', ')}`);
// }

// console.log(sortCitiesA());

//? Створи масив випадкових чисел (від 1 до 100) довжиною 10. Потім за допомогою циклу знайди та виведи найбільше число з масиву. Знайди менше число та середнє арифметичне.
// let numArr = [];
// for(let i = 0; i <= 10; ++i){
//     numArr.push(Math.floor(Math.random() * 100));
// }

// function findMax(){
//     let maxNum = numArr[0];

//     for(let num of numArr){
//         if (num > maxNum){
//             maxNum = num;
//         }
//     }

//     return maxNum;
// }

// function findMin(){
//     let minNum = numArr[0];

//     for(let num of numArr){
//         if (num < minNum){
//             minNum = num;
//         }
//     }

//     return minNum;
// }

// function findAritmethicAver(){
//     let sum = 0;
    
//     for(let num of numArr){
//         sum += num;
//     }

//     let average = Math.floor(sum / numArr.length);
//     return average;
// }

// console.log(`Array of numbers: ${numArr}`);

// console.log(`Max num is: ${findMax()}`);
// console.log(`Min num is: ${findMin()}`);

// console.log(`Arithmetic average num is: ${findAritmethicAver()}`);

//!  Функції

//TODO: Напиши функцію calculateAverage, яка приймає довільну кількість числових аргументів та повертає їх середнє значення. Використай псевдомасив arguments.
// let arr = [];
// let sum = 0;

// function calculateAverage(){
//     arr = Array.from(arguments);

//     for(num of arr){
//         sum += num;
//     }

//     let average = Math.round(sum / arr.length);
//     return average;
// }

// console.log(calculateAverage(8, 7, 8));

//? Створи анонімну функцію для обчислення квадрата числа та присвой її до змінної square. Використай цю функцію для обчислення квадрата числа 5.

// let square =  function(num) {
//     square = num**2;
    
//     return (`${num}² = ${square}`);
// }

// console.log(square(5));

//? Напиши функцію showCallStack, яка викликає іншу функцію secondFunction, яка в свою чергу викликає ще одну функцію thirdFunction. Кожна функція має виводити своє ім'я, щоб побачити порядок викликів у консолі.
// function firstFunction(){
//     console.log('firstFunction execution');
    
//     console.log('Log before secondFunction execution')
//     secondFunction();
//     console.log('Log after secondFunction execution')
// }

// function secondFunction(){
//     console.log('secondFunction execution');
    
//     console.log('Log before thirdFunction execution')
//     thirdFunction();
//     console.log('Log after thirdFunction execution')
// }

// function thirdFunction(){
//     console.log('thirdFunction execution');
// }

// firstFunction();

//TODO: Створи список доступних товарів та функцію додавання, видалення або оновлювання товарів
// // Button vars
// const addButton = 1;
// const deleteButton = 2;
// const updateButton = 3; 
// const nothingButton = 0;

// // Products vars
// let mobilesStr = 'Samsung_A54 Iphone_14 Xiaomi_redmi_3 Huawei_7 Pixel_10';
// console.log(mobilesStr);
// let productArr = mobilesStr.split(' ');

// // Inicial alert
// alert('------------------------- Welcome to Rozetka! -------------------------');
// let userButton;

// // Script logics
// while (Number.parseFloat(userButton) !== nothingButton){
//     userButton = prompt('Here are our mobile phones. To add a product type "1". To delete a product type 2. To update product type 3. Else type 0.');
    
//     if (Number.parseFloat(userButton) === addButton){
//         console.log(addProduct());
//     } else if (Number.parseFloat(userButton) === deleteButton){
//         console.log(deleteProduct());
//     }else if (Number.parseFloat(userButton) === updateButton){
//         console.log(updateProduct());
//     }else{
//         break;
//     }
// }

// // Functions
// function addProduct(){
//     let addingProduct = prompt('What do you want to add?');

//     productArr.push(addingProduct);
//     mobilesStr = productArr.join(' ');

//     return(`Added successfuly! Our list: ${mobilesStr}`);
// }

// function deleteProduct(){
//     let deletingProduct = prompt('What do you delete?');
//     let deletingProductNorm = deletingProduct.toLowerCase();
    
//     mobilesStr = productArr.join(' ');
    
//     let productArrNorm = [];
//     for(actualProduct of productArr){
//         productArrNorm.push(actualProduct.toLowerCase());
//     }

//     if(productArrNorm.includes(deletingProductNorm)){
//         let deletingIndex = productArrNorm.indexOf(deletingProductNorm);


//         productArr.splice(deletingIndex, 1);
//         mobilesStr = productArr.join(' ');
//         return(`Deleted successfuly! Our list: ${mobilesStr}`);
//     } else{
//         return(`Sorry! But there isn't ${deletingProduct}`);
//     }
// }

// function updateProduct(){
//     let updatingProduct = prompt('Which product do you want to update?');
//     let newProduct = prompt('Write new product:');
//     let updatingProductNorm = updatingProduct.toLowerCase();

//     mobilesStr = productArr.join(' ');

//     let productArrNorm = [];
//     for(actualProduct of productArr){
//         productArrNorm.push(actualProduct.toLowerCase());
//     }

//     if(productArrNorm.includes(updatingProductNorm)){
//         let updatingProductIndex = productArrNorm.indexOf(updatingProductNorm);

//         productArr.splice(updatingProductIndex, 1, newProduct);
//         mobilesStr = productArr.join(' ');
//         return(`Updated successfuly! Our list: ${mobilesStr}`);
//     }else{
//         return(`Sorry! But there isn't ${updatingProductNorm}`);
//     }
// }

//TODO: Напиши функцію add для складання довільної кількості аргументів (чисел)
// let sum = 0;

// let add = function(){
//     for(let num of arguments){
//         sum +=num;
//     }

//     return sum;
// }

// console.log(add(7 , 3));

//TODO: Створи масив чисел від 1 до 20. Використовуючи метод filter, залиш у масиві тільки парні числа.
// let Arr = [];

// for(let i = 1; i <= 20; i++){
//     if(i % 2 === 0){
//         Arr.push(i);
//     }
// }

// console.log(Arr);

//TODO: Напиши функцію, яка приймає масив і повертає новий масив, в якому всі елементи вихідного масиву помножені на 2.
// let totalMultiplicated = [];

// function muliplicateNums(numArr){
//     for(num of numArr){
//         totalMultiplicated.push(num *2);
//     }

//     return totalMultiplicated;
// }

// console.log(muliplicateNums([2, 4]));

//TODO: Створи функцію, яка з'єднує два масиви, а потім видаляє всі дублікати.


// function mergeAndRemoveDuplicates(){
//     let finalArr = [];

//     for(let i = 0; i < arguments.length; ++i){
//         finalArr = finalArr.concat(arguments[i]);
//     }

//     return finalArr;
// }

// console.log(mergeAndRemoveDuplicates([1, 2, 3], [3, 4, 5])); // [1, 2, 3, 4, 5]

//TODO: Напиши функцію, яка приймає два параметри: масив і число. Функція має повернути новий масив, який містить всі елементи вихідного масиву, менші за задане число.
// let readyArr = [];

// function filterArr(NumArr, filterNum){
//     for(let num of NumArr){
//         if(num < filterNum){
//             readyArr.push(num);
//         }
//     }

//     return readyArr;
// }

// console.log(filterArr([2, 5, 8, 1,10], 8));

//TODO: Створи масив із 15 випадкових чисел (від 10 до 200). Використовуючи цикл for, знайди найменше число.
// let numArr = [];
// for(i = 0; i < 15; ++i){
//     numArr.push(Math.floor(Math.random() * 200));
// }
// console.log(numArr);

// let smallestNum;
// smallestNum = function(){
//     initialSmallest = numArr[0];
    
//     for(let num of numArr){
//         if (num < initialSmallest){
//             initialSmallest = num;
//         }
//     }

//     smallestNum = initialSmallest;
//     return smallestNum;
// };

// console.log(smallestNum());

// // let smallestNum = numArr[0];
// // function findSmallestNum(){
// //     for(let num of numArr){
// //         if (num < smallestNum){
// //             smallestNum = num;
// //         }
// //     }

// //     return smallestNum;
// // }

// // console.log(findSmallestNum());

//TODO: Перевірка наявності:
//? У тебе є два  рядкИ, що представляють назви міст. Напиши функцію, яка:

//? Перевіряє, чи є в обох рядках місто "Київ".
//? Якщо є, додає його в новий масив один раз.
//? Потім об'єднай обидва рядки і видали дублікати.

let cityStr1 = ('Kyiv, Madrid, Washington, Warsaw, Lisbon, Buharest');
let cityStr2 = ('Kysheniv, Dublin, Brussel, Berlin, Kyiv, Tbilisi');
let totalArr = [];
let kyivStr = [];

let cityArr1 = cityStr1.split(', ');
let cityArr2 = cityStr2.split(', ');

console.log(cityArr1);
console.log(cityArr2);


function findKyiv(){
    if(cityArr1.includes('Kyiv') && cityArr2.includes('Kyiv')){
        kyivStr.push('Kyiv');
    }

    totalArr = totalArr.concat(cityArr1 , cityArr2);

    
    kyivIndex = totalArr.indexOf('Kyiv');
    totalArr.splice(kyivIndex, 1);

    return totalArr;
}

console.log(findKyiv());