const input = document.querySelector('.form input[name="todo"]');
const addButton = document.querySelector('.form button');
const ul = document.getElementsByTagName('ul')[0];


addButton.addEventListener('click', ()=>{
    if(input.value.length != 0 ){
        const newLi = document.createElement('li');
        const textNewLi = document.createTextNode(input.value);
        newLi.appendChild(textNewLi);
        ul.appendChild(newLi);
        input.value = '';
    }
});