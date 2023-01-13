const quarto = document.getElementById('quarto')
const lamp = document.getElementById('lamp')
const OnOff = document.getElementById('OnOff')
var title = document.getElementById('title')

function ligou(){
    quarto.src = 'quarto.jpg';
    lamp.src = 'lamp-ligada.png';
    title.innerHTML = 'Ao sair, por favor, apague!'
}
function desligou(){
    quarto.src = 'escuro.jpg'
    lamp.src = 'lampada.png'
    title.innerHTML = 'Até mais!'
}
function clicou(){
    if (OnOff.textContent == 'Ligar'){
        ligou();
        OnOff.textContent = 'Desligar'
        OnOff.style.backgroundColor = 'red'
        OnOff.style.width = '60px'
    }else{
        desligou();
        OnOff.textContent = 'Ligar'
        OnOff.style.backgroundColor = 'green'
        OnOff.style.width = '50px'
    }
}


OnOff.addEventListener('click', clicou)