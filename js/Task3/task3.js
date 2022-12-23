function getRandomNum(max) {
    return Math.floor(Math.random() * max);
}

// 1) створити функцію яка приймає масив та виводить його
// function printArray(list) {
//     if (!Array.isArray(list)) {
//         console.log("This is not Array");
//         return;
//     }
//     console.log(list);
// }
// printArray([1, 2, 3, 4]);
// printArray('11');

// 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.

// function printGenArray(size) {
//     if (!Number.isInteger(size)) {
//         console.log('This in not Integer');
//         return;
//     }

//     let arr = [];

//     for (let i = 0; i < size; i++) {
//         arr[i] = getRandomNum(30);
//     }

//     for (let index of arr) {
//         console.log(index);
//     }
// }

// printGenArray(10);

// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function minAndMaxElementArray(arr) {
    if (!Array.isArray(arr)) {
        console.log('This is not Array');
        return;
    }

    let min = arr[0];
    let max = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    console.log('Min: ' + min, '. Max: ' + max);
}

minAndMaxElementArray([1, 2, 3, -4, 12, -5]);

// 5) створити функцію яка повертає найбільше число з масиву
// 6) створити функцію яка повертає найменьше число з масиву
// Use lib: Math.min and Math.max

// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// function sumArray(arr) {
//     if (!Array.isArray(arr)) {
//         console.log('This is not Array');
//         return;
//     }

//     let sum = 0;

//     for (let element of arr) {
//         sum += element;
//     }
//     console.log('Sum: ' + sum);
// }
// sumArray(1, 2, 3);
// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

// let listObj = [{ name: 'Dima', age: 13 }, { model: 'Camry' }];

// function getKeys(list) {
//     let newArray = [];
//     for (let element of list) {
//         // newArray.push(Object.keys(element));
//         // 1 version
//         // for (let keys of Object.keys(element)) {
//         //     newArray.push(keys);
//         // }

//     }
//     return newArray
// }

// console.log(getKeys(listObj));

// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   EXAMPLE:
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]
// Sum matrix is easy

// =========================

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// function testFunct() {
//     let min = arguments[0];
//     let max = arguments[1];
//     for (let index of arguments) {
//         if (index < min) {
//             min = index;
//         }
//         if (index > max) {
//             max = index;
//         }
//     }
//     console.log(max);
//     return min;
// }

// console.log(testFunct(1, 2, 3, -4, 12, -5));

// - Взяти задачі з завдання 10 та 9 та обєднати їх в одну динамічну функцію.
//   Що б я міг сам вибрати повернути мені масив ключів чи масив значень.

// let listObj = [{ name: 'Dima', age: 13 }, { model: 'Camry' }];

// function getKeys(list, choseMethod) {
//     let newArray = [];
//     for (let element of list) {
//         if (choseMethod === 'keys') {
//             newArray.push(Object.keys(element));
//             // newArray = Object.keys(element);
//             // for (let keys of Object.keys(element)) {
//             //     newArray.push(keys);
//             // }
//         }
//         if (choseMethod === 'values') {
//             newArray.push(Object.values(element));

//             // newArray = Object.values(element);
//             // newArray.push(Object.values(element));
//             // for (let keys of Object.values(element)) {
//             //     newArray.push(keys);
//             // }
//         }
//     }
//     // console.log(newArray);
//     return newArray.flat();
// }
// let result = getKeys(listObj, 'keys');

// console.log(result);

// - Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

// function foo(arr, index) {
//     if (!Array.isArray(arr)) {
//         console.log('This is not Array');
//         return;
//     }
//     if (index > arr.length) {
//         console.log('Out of range');
//         return;
//     }
//     let x = arr[index];
//     let nextX = arr[index + 1];
//     arr[index] = nextX;
//     arr[index + 1] = x;

//     console.log(arr);
// }

// foo([9, 8, 0, 4], 2);

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець масиву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

function moveElements(arr, value) {
    if (!Array.isArray(arr)) {
        console.log('This is not Array');
        return;
    }

    if (!Number.isInteger(value)) {
        console.log('This is not Number');
        return;
    }

    let newArr = [],
        newArr2 = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            newArr2.push(arr[i]);
            continue;
        }
        newArr.push(arr[i]);
    }
    return newArr.concat(newArr2);
}

let res = moveElements([1, 0, 6, 0, 3], 0);

console.log(res);
// =================================
// Тут потрібно гуглити. Ми цього не розглядали.
// Для тих, хто не боїться пошукової строки

// - Дано список імен.
// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
