// 1.Створіть функцію wellcomUser, яка приймає масив і функцію-колбек hiUser яка виводить в console ('Вітаю ${user}'), і викликає цю функцію для кожного елемента масиву.
// 2.Стрілкові функції
//  перепишіть попередню функцію в стрілкову
// 3.Напишіть функцію, яка приймає два числа: основу та показник степеня, і повертає результат піднесення основи до цього степеня.
// 4.Напишіть функцію, яка приймає масив чисел і повертає новий масив, що містить квадрати цих чисел.


let users = ['Bob', 'Anna', 'Sam', 'Tom'];
function welcomUser(users, hiUser) {
    for (let i = 0; i < users.lenght; i++){
        hiUser(users[i]);
    }
}
function hiUser(userName) {
    console.log(`Hi ${userName}`)
}
welcomUser(users, hiUser);

// push:
// Завдання 1: Створіть порожній масив та використайте метод push, щоб додати до нього кілька елементів (наприклад, чисел чи рядків).
// Завдання 2: Створіть функцію, яка приймає масив і елемент, і використовує push для додавання цього елемента до масиву

let numerFirst = [];
numerFirst.push('1','2','3');
numerFirst.push('11','12','13');


function numerFirstNumer(array, number){
    array.push(number);
}

numerFirstNumer(numerFirst, 21);
numerFirstNumer(numerFirst, 22);
numerFirstNumer(numerFirst, 23);

console.log(numerFirst);

// pop:
// Завдання 1: Створіть масив і використайте метод pop, щоб видалити останній елемент з масиву.
// Завдання 2: Напишіть функцію, яка приймає масив і використовує pop для видалення останнього елемента масиву.

let firstNumber = [1,2,3,4,5,6,7,8,9,10,11,12,13];
console.log(firstNumber);
firstNumber.pop();
console.log(firstNumber);
firstNumber.pop();
console.log(firstNumber);
firstNumber.pop();
console.log(firstNumber);
firstNumber.pop();
console.log(firstNumber);

// unshift:
// Завдання 1: Створіть масив і використайте метод unshift, щоб додати елементи в початок масиву.
// Завдання 2: Напишіть функцію, яка приймає масив і елемент, і використовує unshift для додавання цього елемента в початок масиву.

let startNumber = [1,2,3,4,5,6,7,8,9,10,11,12,13];
startNumber.unshift(Tom);
startNumber.unshift(Bob);

console.log(startNumber);

// shift:
// Завдання 1: Створіть масив і використайте метод shift, щоб видалити перший елемент з масиву.
// Завдання 2: Напишіть функцію, яка приймає масив і використовує shift для видалення першого елемента масиву.
let deleteNumber = [1,2,3,4,5,6,7,8,9,10,11,12,13];
deleteNumber.shift();
deleteNumber.shift();
console.log(deleteNumber);




// fill:
// Завдання 1: Створіть масив певного розміру і використайте метод fill, щоб заповнити його певним значенням.
// Завдання 2: Напишіть функцію, яка приймає масив, значення та індекси, і використовує fill для заповнення масиву 
//             зазначеними значеннями на зазначених позиціях.

let fillNumber = [1,2,3,4,5,6,7,8,9,10,11,12,13];
fillNumber('Stop');
console.log(fillNumber);
fillNumber('New',3,10);
console.log(fillNumber);


