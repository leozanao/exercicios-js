const buttons = document.getElementById('buttons')
const semaforo = document.getElementById('semaforos')
let colorIndex = 0

const cores = (Event) => {
    turnOn[Event.target.id]()
}
const nextIndex = () => colorIndex = colorIndex <2 ? ++colorIndex : 0;

const auto = () => {
    const colors = ['red','yellow','green']
    const color = colors[colorIndex]
    turnOn[color]()
    nextIndex()
}




const turnOn = {
    'red': () => semaforo.src = 'vermelho.png',
    'yellow': () => semaforo.src = 'amarelo.png',
    'green': () => semaforo.src = 'verde.png',
    'automatic': () => setInterval (auto, 900)

}
buttons.addEventListener('click', cores)