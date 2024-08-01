// Домашня робота
// 1)Напишіть функцію яка рахує кількість букв великого регістру в стрінгу і повертає кількість
//     CountLowrercase("abc"); ===> 0
//     CountLowrercase("abcABC123"); ===> 3

function CountLowrercase(str){
    let matches = str.match(/[A-ZА-ЯЇ]/g);
    return matches ? matches.length : 0;
}
console.log(CountLowrercase("abc"));
console.log(CountLowrercase("abcABC123"));


//   2) Написати функцію яка видаляє всі тексктові символи з стрінга, а отриманні цифрові значення переводить в тип намбер та повертає його 
//     fclearString("hell5o wor6ld")  ======> 56


function removeTextSymbol(str) {
    let nonDigitRegEx = /\D/g;

    let numberStr = str.replace(nonDigitRegEx, '');
  
    return Number(numberStr);
    }

console.log(removeTextSymbol("hell5o wor6ld"));


// 3) Створити функцію валідації юзернейма, імя може включати літери цифри, тире і нижьнє тире, довжина імя повина бути від 4 до 10 символів. Приклад: validateUsr('a') => false,
//     validateUsr('p1pp1') => true, validateUsr('asd43_34') => true

function validateUsr(username){
    let validRegEx = /^[a-zA-Z0-9_-]{4,10}$/;
    return validRegEx.test(username);
}

console.log(validateUsr('p1pp1'));
console.log(validateUsr('asd43_34'));
console.log(validateUsr('r2d'));

// 4)Напишіть функцію, яка приймає повідомлення та час у мілісекундах як аргументи, і виводить це повідомлення у консоль після зазначеного часу.

function delayMessage(message, delay){
    setTimeout(()=>{
        alert(`User say:${message}`);
    }, delay);
}

delayMessage('Hellloo', 5000);