// Створіть функцію, яка приймає два числа як аргументи і повертає менше з них.
// Створіть функцію, яка приймає два числа як аргументи і повертає більше з них.
// Завдання для Math.pow:


minValue(13,43,10,52,62);
function minValue (...arg){
    console.log(Math.min(...arg));
}

maxValue(13,43,10,52,62);
function maxValue (...arg){
    console.log(Math.max(...arg));
}

// Створіть функцію, яка підносить число до заданого ступеня.
// Виведіть результат у консоль.
// Завдання для Math.floor та Math.ceil:
// Створіть функцію, яка приймає випадкове дробове число та використовує Math.floor для округлення вниз.
// Створіть функцію, яка приймає випадкове дробове число та використовує Math.ceil для округлення вгору.

mathValue(3,4);
function mathValue(...value){
    console.log(Math.pow(...value));
}

floorValue(3,23);
function floorValue (value){
    console.log(Math.floor(value));
}

ceilValue(7,23);
function ceilValue (value){
    console.log(Math.ceil(value));
}


// Завдання для Date.toLocaleString:
// Створіть об'єкт Date для поточної дати та часу.
// Використайте метод toLocaleString(), щоб отримати поточну дату та час у зручному для читання форматі.
// Виведіть результат у консоль.

const stringDate = new Date;
console.log( stringDate.toLocaleString() );

// Завдання для String.split та toUpperCase:

// Створіть рядок, який містить слова, розділені пробілами.
// Використайте метод split, щоб розбити рядок на масив слів.
// Виведіть отриманий масив у консоль у верхньому регістрі.

let solitValue = 'Bob, Tom, Anna, John, Kevin';
console.log(solitValue.toUpperCase().split("*"));

// Тема: Rest
// Створіть функцію, яка приймає перший аргумент як рядок, а решту аргументів зберігає в масиві за допомогою оператора Rest. Функція 
// повинна вивести рядок і масив.

restValue('Тест стрінг', 1, 2, 3, true);
function restValue(str, ...arg){
    console.log(String(str), arg);
}


// Напишіть функцію, яка приймає будь-яку кількість числових аргументів та обчислює їх середнє значення за допомогою оператора Rest.

// Тема: TypeOf
// Створіть функцію, яка приймає аргумент будь-якого типу та виводить повідомлення про його тип за допомогою оператора typeof.

valueType('Test',2,4)
function valueType(...arg){
    console.log(typeof arg);
}



// Напишіть функцію, яка перевіряє тип змінної та виводить повідомлення "Це число", "Це рядок" або "Це інший тип", використовуючи оператор typeof.

