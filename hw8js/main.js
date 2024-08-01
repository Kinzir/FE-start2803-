// створіть список ul з 5 елементами li всередині.
// За допомогою querySelector виберіть:
// - перший елемент списку
// - останній елемент списку
// - 3 елемент списку
// За допомогою querySelectorAll
// - всі елементи li в списку
// - конвертуйте вибрані елменти в массив

let firstEl = document.querySelector('.firstEl');
console.log(firstEl);
let thirdEl = document.querySelector('.thirdEl');
console.log(thirdEl);
let lastEl = document.querySelector('.fiveEl');
console.log(lastEl);

let [...liElements] = document.querySelectorAll('li');
console.log(liElements);



// Створіть на сторінці елемент який вибирається ціми селекторами
let listItems = document.querySelectorAll('ul.nav > li');
let listItem = document.querySelectorAll('li:nth-child(2)');


const booksArray = [
    {
        title: 'Пригоди Аліси в Країні Див',
        year: 1865,
        rating: 4.5
    },
    {
        title: '1984',
        year: 1949,
        rating: 4.8
    },
    {
        title: 'Гаррі Поттер і філософський камінь',
        year: 1997,
        rating: 4.7
    }
];
let table = document.querySelector('table');
tbodyEl = document.createElement('tbody');
table.appendChild(tbodyEl);
booksArray.forEach(book=>{
    let row = document.createElement('tr');
    let titleTd = document.createElement('td');
    titleTd.textContent = book.title;
    row.appendChild(titleTd);

    let yearTd = document.createElement('td');
    yearTd.textContent = book.year;
    row.appendChild(yearTd);

    let ratingTd = document.createElement('td');
    ratingTd.textContent = book.rating;
    row.appendChild(ratingTd);
    tbodyEl.appendChild(row);
})
