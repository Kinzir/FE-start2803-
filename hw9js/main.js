window.onload = function(){
    // 1) Створіть функцію яка приймає число і створює вказане числом кількість блоків з з правилом border-radius, width 50px height 50px та background-color
    let containerEl = document.querySelector('.circle-container');

    function drawElement(){
        let block = document.createElement('div');
        block.style.width = '50px';
        block.style.height = '50px';
        block.style.borderRadius = '50%';
        block.style.background = randomBg();
        return block;
    }

    function drawCircle(number){
        // let container
        for(let i=0; i<number; i++){
            let block = document.createElement('div');
            block.style.width = '50px';
            block.style.height = '50px';
            block.style.borderRadius = '50%';
            block.style.background = 'gray';
            // containerEl.appendChild(block);
        }

    }

    // drawCircle(100);

    // 2)Створіть блок за допомогою js задайте блоку стиль display flex та в середині цього блоку створіть 50 div блоків за допомогою функції

    let newBlock = document.createElement('div');
    newBlock.classList.add('js-container');
    newBlock.style.display = 'flex';
    newBlock.style.gap = '20px';
    newBlock.style.flexWrap ='wrap';
    for(let i =0; i<50; i++){
        newBlock.appendChild(drawElement());
    }
    document.body.appendChild(newBlock);

    // 3) доадайте всім стврореним 50 div елементам класс circle-elemt та кожному непарному елементу class  test
    let [...jsDivs] = document.querySelectorAll('.js-container>div');
    // let jsDivs = document.querySelector('.js-container').children;
    console.log(jsDivs);

    jsDivs.forEach((element, index)=>{
        element.classList.add('circle-elemt');
        if(index %2 !== 0){
            element.classList.add('test');
        }
    });
    // 4) Замініть в парних елементів class circle-elemt  на odd-circle-elemt

    jsDivs.forEach((element, index)=>{
        if(index %2 === 0){
            element.classList.replace('circle-elemt', 'odd-circle-elemt');
        }
    });

    // 4) додайте всім 50 елементам рандомний бекграунд
    // додаткове завдання

    function randomBg(){
        let r = Math.floor(Math.random()*256);
        let g = Math.floor(Math.random()*256);
        let b = Math.floor(Math.random()*256);
        return `rgb(${r}, ${g}, ${b})`;
    }
}