// splice:
// Завдання 1: Створіть масив і використайте метод splice, щоб видалити кілька елементів з середини масиву.

let numberValue = [1,2,3,4,5,6,7]
numberValue.splice(1,3);
console.log(numberValue);

// Завдання 2: Напишіть функцію, яка приймає масив, індекс та кількість елементів, і використовує splice для видалення 
//             елементів з масиву.

let numberValuer = [1,2,3,4,5,6,7]
function numberValueri(array, index, element){
    array.splice(index, element);
    return array;
}
console.log(numberValueri(numberValuer, 4,5));


// reverse:
// Завдання 1: Створіть масив і використайте метод reverse, щоб перевернути змінений порядок його елементів.

let reverseNumber = [1,2,3,4];
reverseNumber.reverse();
console.log(reverseNumber);

// Завдання 2: Напишіть функцію, яка приймає масив і використовує reverse для зміни порядку його елементів.

let reverseNumberName = [1,2,3,4,Bob,Tom];
function newReverse(array){
    array.reverse();
    return array;
}

console.log(newReverse(reverseNumberName));

// concat:
// Завдання 1: Створіть два масиви і використайте метод concat, щоб об'єднати їх в один новий масив.

let concatFirst = [1,2,3,4,5,6]
let concatSecond = [Bob,Tom];
concatFirst = concatFirst.concat(concatSecond);
console.log(concatFirst);


// Завдання 2: Напишіть функцію, яка приймає два масиви і використовує concat для об'єднання їх в новий масив.

let concatFirstF = [1,2,3,4,5,6]
let concatSecondF = [Bob,Tom];
function fArr(array){
    concatFirstF = concatFirstF.concat(concatSecondF);
    return array;
}
fArr(concatFirstF);
console.log(concatFirstF);

// includes:
// Завдання 1: Створіть масив і використайте метод includes, щоб перевірити, чи масив містить певний елемент.

let includesNumber = [1,2,3,4,5,6];
console.log(`est li 2 v masive ${includesNumber.includes(2)}`);

// Завдання 2: Напишіть функцію, яка приймає масив і елемент, і використовує includes для перевірки наявності цього елемента в масиві.

let includesNumberFunction = [1,2,3,4,5,6];
function includesNF(array,element){
    return array.includes(element);
}
console.log(`est li 2 v masive ${includesNF(includesNumberFunction, '3')}`);

// filter:
// Завдання 1: Створіть масив чисел і використайте метод filter, щоб створити новий масив, що містить лише не парні числа.

let filterNumber = [1,2,3,4,5,65,43,12,76,57,32,23];
function numberPar(value) {
    return value % 2 === 0;

}
let filterArr = filterNumber.filter(numberPar);
console.log(filterArr);

