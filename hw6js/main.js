// Переишіть цей код використовуючи let const~
// // Замість var
for (var i = 0; i < 5; i++) {
    console.log(i);
}

for (let i = 0; i < 5; i++) {
    console.log(i);
}


// Замість var
var message = 'test';
function example() {
    if (true) {
        var message = 'Hello, world!';
        console.log(message);
    }
    console.log(message); // Виведе 'Hello, world!'
}


let sms = 'test';
function example() {
    if (true) {
        let message = 'Hello, world!';
        console.log(sms);
    }
    console.log(sms); // Виведе 'Hello, world!'
}

// Використовуючи for in  виведіть значення з обєктку в console.log
const personOne = {
    name: 'John',
    age: 25,
    occupation: 'Developer'
};


const personSecond = {
        name: 'John',
        age: 25,
        occupation: 'Developer'
    };
for (const key in personSecond) {
    console.log(`Ключ: ${key} Значення: ${personSecond[key]}`);
}


// Використовуючи for of  та for in  виведіть занчення з обєктів які знаходяться в масиві
const studentsOne = [
    { name: 'Alice', age: 20, grade: 'A' },
    { name: 'Bob', age: 22, grade: 'B' },
    { name: 'Charlie', age: 21, grade: 'C' }
];

const students = [
    { name: 'Alice', age: 20, grade: 'A' },
    { name: 'Bob', age: 22, grade: 'B' },
    { name: 'Charlie', age: 21, grade: 'C' }
];
for (const value of students) {
    for (const key in value) {
        console.log(`Ключ:${key} Значення:${value[key]}`);
    }
}

// Завдання для Date.getYear:
// Створіть функцію, яка повертає рік народження користувача коли користувач вводить свій вік
// Виведіть результат у консоль.

let yearValue = Number(prompt('Введіть свій рік народження'));
function Year(year){
    this.year = year;
}
Year.prototype.AllInfo = function(){
    return `Year: ${this.year}`
}
console.log(yearValue);

// Робота з  Class
// 1 Створення класу та об'єкта:
// Створіть клас Person з властивостями name та age.
// Створіть об'єкт з цього класу з ім'ям "John" та віком 30.

class people {
    constructor (name, age){
        this._name = name;
        this._age = age;
    }
}
let userFirst = new people('John', 30);
console.log(people);


// 3 Наслідування:
// Створіть клас Student, який наслідує від класу Person.
// Додайте властивість studentId до класу Student.
// Додайте метод study, який виводить повідомлення про вивчення студентом.


class person{
    constructor (name, age){
        this._name = name;
        this._age = age;
    }
    sayHello(){
        return ` ${this._name}`;
    }
}
class Student extends person{
    constructor (name, age, studentId){
        super(name, age);
        this._studentId = studentId;
    }
    study(){
        return ` ${`Student: ${this._name} Age: ${this._age} ID: ${this._studentId}`}`;
    }
}
let Student1 = new Student('Anna', 30, 15128);
console.log(Student1.study());

// Створіть функцію яка отримує массив і  фільтрує його за книжками які випущені після 2000 року

const books = [
    { author: 'J.K. Rowling', title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
    { author: 'George R.R. Martin', title: 'A Game of Thrones', year: 1996 },
    { author: 'J.R.R. Tolkien', title: 'The Fellowship of the Ring', year: 1954 },
    { author: 'Dan Brown', title: 'The Da Vinci Code', year: 2003 }
];
function BookFilter2000 (arr){
    return arr.filter(book => book.year > 2000);
}
let filterBook = BookFilter2000(books)
console.log(filterBook);