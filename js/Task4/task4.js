// MORE tASKS IN LESSON 3

// Ваша функція має приймати одне натуральне число, після чого вивести:

// "Fizz", якщо це число ділиться на 3;
// "Buzz", якщо це число ділиться на 5;
// “FizzBuzz”, якщо виконані обидві попередні умови;
// саме це число в інших випадках

// EXAMPLE:
// Input: 15
// Output: FizzBuzz

// Input: 10
// Output: Buzz

// ----------------

// function task1(num) {
//     let text = '';
//     if (!Number.isInteger(num)) {
//         console.log('This is not integer');
//         return;
//     }

//     if (num % 3 == 0) text += 'Fizz';
//     if (num % 5 == 0) text += 'Buzz';
//     console.log(text);
//     return text;
// }

// task1(15);
// task1(10);
// task1(11);

// У цьому завдання вам належить побудувати драбинку з чисел.
// Програма приймає на вхід ціле позитивне число n (n<=15) - кількість рівнів, ваше завдання вивести n рівнів,
// у кожному з яких стоять числа від 1 до рівня.

// Вивести можна або вигляді кожного нового рядка, або списку.

// EXAMPLE:
// Input: 2

// Output:
// [
// [1],
// [1,2]
// ]

// Input: 4

// Output:
// [
// [1],
// [1,2],
// [1,2,3],
// [1,2,3,4]
// ]

// ---------------------------

// function task2(num) {
//     let arr = [];
//     if (!Number.isInteger(num)) {
//         console.log('This is not integer');
//         return;
//     }

//     for (let i = 1; i <= num; i++) {
//         let newArr = [];
//         for (let j = 1; j <= i; j++) {
//             newArr.push(j);
//         }

//         arr.push(newArr);
//     }
//     console.log(arr);
// }

// task2(3);
// task2(10);
// task1(11);
// console.log('hello');

// Напишіть функцію для побудови горизонтальних стовпчастих діаграм за допомогою символу зірочки.
// Вводити потрібно масив з цілими данними

// EXAMPLE:
// Input: [3,7,1,10,8]

// Sample Output:
// ***
// *******
// *
// **********
// ********

// function task3(arr) {
//     if (!Array.isArray(arr)) {
//         console.log('This is not array');
//         return;
//     }

//     for (let element of arr) {
//         let newText = '';
//         for (let i = 0; i < element; i++) {
//             newText += '*';
//         }
//         console.log(newText);
//     }
// }

// task3([3, 7, 1, 10, 8]);
