//! ====================================== Масиви і функції ====================================== !//

//TODO: 1. Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача.
/*
? У змінних names та phones зберігаються рядки імен та телефонних номерів,
? розділені комами. Порядковий номер імен та телефонів у рядках вказують на
? відповідність. Кількість імен та телефонів гарантовано однакова.
*/

// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';

// console.log('names:', names);
// console.log('phones:', phones);

// const namesArr = names.split(',');
// const phonesArr = phones.split(',');

// console.log('namesArr:', namesArr);
// console.log('phonesArr:', phonesArr);

// for (let i = 0; i < namesArr.length; i++) {
//   console.log(`${namesArr[i]}: ${phonesArr[i]}`);
// }

//TODO: 2. Напиши скрипт, який виводить у консоль усі слова рядка крім першого і останнього.

// const string = 'Our office is closed so we`re working from home today.';
// let arr = string.split(' ');

// function createArr(){
//     arr = string.split(' ');
//     arr = arr.slice(1 , arr.length - 1);
//     return arr;
// }

// console.log(createArr());

// const string = 'Our office is closed so we`re working from home today.';
// let arr = string.split(' ');
// let arrFinal = [];

// function createArr(string){
//     for (let i = 1; i < arr.length - 1; ++i){
//         arrFinal.push(arr[i]);
//     }

//     return arrFinal;
// }

// console.log(createArr(string));

//TODO: 3. Напиши скрипт пошуку найменшого числа у масиві.
//? Код повинен працювати
//? для будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.


// const values = [17, -10, 94, -30, 1, 23, -20];
// let min = values[0];

// function findMinNum(values){
//     for(const actualNum of values){
//         if (actualNum < min){
//             min = actualNum;
//         }
//     }
    
//     return min;
// }

// console.log(findMinNum(values));


//TODO: 4. Порахувати загальну суму зарплат з двох масивів
// ? У нас є декілько масивів із зарплатами працівників із різних відділів, потрібно порахувати загальну суму зарплат

// const managerSalaries = [100, 150, 250, 400, 500];
// const developersSalaries = [800, 1500, 4000];
// let generalSalaries = managerSalaries.concat(developersSalaries);

// let total = 0;

// function calcTotalSalaries() {
//     for (const num of generalSalaries){
//         total +=num;
//     }

//     return total;
// }

// console.log(calcTotalSalaries());

//TODO: Отримай рандомне значення з масиву Math.random()

// const devices = ['samsung', 'iphone', 'xiaomi', 'oppo', 'honor', 'nokia', 'pixel'];

// let randomDevice = devices[Math.floor(Math.random() * devices.length)];

// console.log(randomDevice);

//TODO: Напиши скрипт, який для об'єкта user, послідовно:
// ? - додає поле mood зі значенням 'happy'
// ? - замінює значення hobby на 'skydiving'
// ? - замінює значення premium на false
// ? - виводить вміст об'єкта user у форматі ключ:значення використовуючи Object.keys() та for...of

// const user = {
//     name: 'Mango',
//     age: 20,
//     hobby: 'html',
//     premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = !user.premium;

//let userKeys = Object.keys(user);

// for(key of userKeys){
//     console.log(`${key}: ${user[key]}`);
// }

//TODO: Зведіть у квадрат кожен елемент цього об'єкта:
// const obj = { x: 2, y: 3, z: 4 };
// console.log(obj);

// let objValues = Object.keys(obj);
// let finalObj = {};

// for(let key of objValues){
//     obj[key] = obj[key] **2;
// }

// console.log(obj);

//TODO:  У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для підсумовування всіх зарплат і збережіть результат у змінній sum.
// ? Повинно вийти 390. Якщо об'єкт salaries порожній, то результат має бути 0.

// const salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
// };
// console.log(salaries);


// const salariesKeys = Object.keys(salaries);
// let sum = 0;

// for(let key of salariesKeys){
//     sum += salaries[key];
// }
// console.log(sum);