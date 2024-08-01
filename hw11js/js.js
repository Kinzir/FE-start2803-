// Домашня робота
window.onload = function(){


// Завдання 'onContextMenu': 
// Створіть елемент текстовий блок, на який при правому кліку миші замість звичайного контекстного меню браузера 
// з'являється власне створене контекстне меню. Це меню може містити опції, як-от "вирівняти по центру", "вирівняти по правому 
// центру", "вирівняти по лівому краю", "Приховати елемент".]
        let textBlockEl = document.querySelector('#textBlock');
    let contextMenuEl = document.querySelector('#contextMenu');

    textBlockEl.addEventListener('contextmenu', function(e){
        e.preventDefault();
        contextMenuEl.style.display ='block';
        contextMenuEl.style.left = `${e.pageX}px`;
        contextMenuEl.style.top = `${e.pageY}px`;
    });

    document.querySelector('#centerContent').addEventListener('click', function(){
        textBlockEl.style.textAlign = 'center';
    });
    document.querySelector('#rightContent').addEventListener('click', function(){
        textBlockEl.style.textAlign = 'right';
    });
    document.querySelector('#leftContent').addEventListener('click', function(){
        textBlockEl.style.textAlign = 'left';
    });
    document.querySelector('#hideMenu').addEventListener('click', function(){
        contextMenuEl.style.display = 'none';
    });

    

// Завдання 'keyup': Створіть ігрове поле, де користувач може переміщати об'єкт (наприклад, квадрат або коло) за допомогою клавіш 
// стрілок. Рух об'єкта повинен зупинятися, коли клавіша відпущена

let gameArea = document.querySelector('#gameArea');
let moveObj = document.querySelector('#movableObject');

let step = 5;
let position = {
    top:225,
    left:225
}
document.addEventListener('keydown', function(e){
    switch(e.key){
        case 'ArrowUp':
        position.top = Math.max(0, position.top-step);
        break;
        case 'ArrowDown':
        position.top = Math.min(gameArea.clientHeight - moveObj.clientHeight,
            position.top+step);
        break;
        case 'ArrowLeft':
        position.left = Math.max(0, position.left-step);
        break;
        case 'ArrowRight':
        position.left = Math.min(gameArea.clientWidth - moveObj.clientWidth,
            position.left+step);
        break;
    }
    moveObj.style.top = `${position.top}px`;
    moveObj.style.left = `${position.left}px`;
    
    

    })
}

// Створіть елемент  P, який при наведенні миші змінює текст на "Hello, World!", а при відведенні миші повертається до початкового 
// тексту.

let mouseBlock = document.querySelector('.hallo_world');

mouseBlock.addEventListener('mouseover', function(){
    this.classList.add('new_block_hallo_world');
    this.textContent = '"Goodbay World"';
});

mouseBlock.addEventListener('mouseout', function(){
    this.classList.remove('new_block_hallo_world');
    this.textContent = '"Hello, World!"';
})






