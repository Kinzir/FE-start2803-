window.onload = function(){
    let form = document.querySelector('#registrationForm');
    let nameInput = document.querySelector('#name');
    let emailInput = document.querySelector('#email');
    let passwordInput = document.querySelector('#password');
    let confirmPasswordInput = document.querySelector('#confirmPassword');
    let submitBtn = document.querySelector('#submitBtn');

    function validateForm(){
        let name = nameInput.value.trim();
        let email = emailInput.value.trim();
        let password = passwordInput.value.trim();
        let confirmPassword = confirmPasswordInput.value.trim();
        console.log(name, email, password, confirmPassword);
        let isFormValid = name.length>2 && email.length>4 && password.length>6 && confirmPassword >6 && (password === confirmPassword);

        console.log(isFormValid);
        submitBtn.disabled = !isFormValid;
    }

    nameInput.addEventListener('input', validateForm);
    emailInput.addEventListener('input', validateForm);
    passwordInput.addEventListener('input', validateForm);
    confirmPasswordInput.addEventListener('input', validateForm);

    form.addEventListener('submit', function(e){
        e.preventDefault();
        alert('Форма відправлена');
        form.reset();
        submitBtn.disabled = true;
    });



// Домашня робота:
// Завдання 1: Конвертер валют
// Мета: Створити простий конвертер валют, який перетворює введені користувачем гроші з однієї валюти в іншу.

function currenecyAmount(){
    let amountEl = parseFloat(document.querySelector('#amountValue').value);
    let currencyEl = parseFloat(document.querySelector('#currencyValue').value);

    let multiAmount = amountEl * currencyEl;

    document.querySelector('#currencyResult').value = multiAmount.toFixed(2);
}
document.querySelector('#currencyButton').addEventListener('click',currenecyAmount);

//Todo

let formO = document.querySelector('form');
let todoInput = document.querySelector('#todo');
let listGroup = document.querySelector('.list-group');


function createItem(value) {
    let item = document.createElement('li');
    item.classList.add('list-group-item');
    let date = new Date().toDateString();

    let textNode = document.createTextNode(`${value}: ${date}`);
    item.appendChild(textNode);

    let buttonRemove = document.createElement('button');
    buttonRemove.textContent = 'Х';
    buttonRemove.classList.add('remove-button');
    item.appendChild(buttonRemove);

    return item;
}


formO.addEventListener('submit', function (e) {
    e.preventDefault();
    if (todoInput.value.length === 0) {
        todoInput.classList.add('bg-danger', 'border-danger');
    } else {
        listGroup.appendChild(createItem(todoInput.value));
        todoInput.value = '';
        if (todoInput.classList.contains('border-danger')) {
            todoInput.classList.remove('bg-danger', 'border-danger');
        }
    }
});


listGroup.addEventListener('click', function (e) {
    if (e.target.classList.contains('remove-button')) {
        listGroup.removeChild(e.target.parentElement);
    }
});


listGroup.addEventListener('dblclick', function (e) {
    if (e.target.classList.contains('list-group-item')) {
        let text = e.target.textContent.split(': ')[0];
        todoInput.value = text;
        listGroup.removeChild(e.target);
    }
});

}