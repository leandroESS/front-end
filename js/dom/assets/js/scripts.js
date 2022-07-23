function changeMode() {
    changeClasses();
    changeText();
}

function changeClasses() {
    button.classList.toggle('dark-mode'); //se tiver a classe ele apaga, se não tiver ele add
    h1.classList.toggle('dark-mode');
    body.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
}

function changeText() {
    if (body.classList.contains('dark-mode')) {
        button.innerHTML = 'Light Mode';
        h1.innerHTML = 'Dark mode' + ' on';
        return;
    }

    button.innerHTML = 'dark-mode';
    h1.innerHTML = 'Light Mode' + ' on';
}



const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0]; //retorna array
const footer = document.getElementsByTagName('footer')[0]; //retorna array

console.log(body);
console.log(button); //só pra verse selecionou certo (ver no console do navegador)

button.addEventListener('click', changeMode); // dizendo que e é um evento de clique e chamando a função



