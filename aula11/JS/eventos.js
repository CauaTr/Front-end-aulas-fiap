let botao1 = document.querySelector('#btn1')

// botao1.onclick = function(){
//     alert('Olá Mundo!')
// }

// botao1.onclick = () => {alert('Olá Mundo!')}



// () => {}
// botao1.onclick = () => alert('Olá Mundo!')

// botao1.addEventListener('click', () => {alert('Olá Mundo')})

// botao1.addEventListener('click', clicou)
// botao1.addEventListener('mouseenter', entrou)
// botao1.addEventListener('mouseout', saiu)

// function clicou(){
//     botao1.innerHTML = 'Clicou, não entra nem sai mais'
//     botao1.removeEventListener('mouseenter', entrou)
//     botao1.removeEventListener('mouseout', saiu)
// }

// function entrou(){
//     botao1.innerHTML = 'Entrou'
// }

// function saiu(){
//     botao1.innerHTML = 'Saiu'
// }

// let botoes = document.querySelector(`.item`)

// botoes.forEach(
//     (item, i) => {
//     item.addEventListener('click', () =>console.log(`Clicou no item ${i+1}`))
//     }
// )


let div1 = document.querySelector('#div1')

div1.addEventListener('mouseenter', entrar)
div1.addEventListener('mouseout', saiu)
//div1.addEventListener('click', clicar)
div1.addEventListener('contextmenu', clickDireito)
div1.addEventListener('dblclick', clickDuplo)
div1.addEventListener('mousedown', apertou)
div1.addEventListener('mouseup', soltar)

function entrar(){
    div1.innerHTML = 'Você Entrou'
    div1.style.background = 'blue'
    div1.style.color = 'white'
}

function saiu(){
    div1.innerHTML = 'Você Saiu'
    div1.style.background = 'yellow'
    div1.style.color = 'black'
}

function clicar(){
    div1.innerHTML = 'Você Clicou'
    div1.style.background = 'red'
    div1.style.color = 'white'
}

function clickDireito(e){
    e.preventDefault()
    div1.innerHTML = 'Click Direito'
    div1.style.background = 'pink'
    div1.style.color = 'black'
}

function clickDuplo(){
    div1.innerHTML = 'Click Duplo'
    div1.style.background = 'green'
    div1.style.color = 'white'
}

function apertou(){
    div1.innerHTML = 'Você Apertou'
    div1.style.background = 'aqua'
    div1.style.color = 'white'
}

function soltar(){
    div1.innerHTML = 'Você Soltou'
    div1.style.background = 'lime'
    div1.style.color = 'black'
}

div1.addEventListener('mousemove', mover)

function mover(e){
    let x = e.offsetX
    let y = e.offsetY
    let res = document.querySelector('#res')
    res.innerHTML = `Posição X: ${x} e Y: ${y}`
}

let texto = document.querySelector('#texto')


texto.addEventListener('keyup', () => {
    let resultado = document.querySelector('#resp')
    resultado.innerHTML = texto.value
})

let px = 0
let py = 0


document.addEventListener('keydown', e => {

    div1.style.position = 'relative'
    let tecla = e.key

    if(tecla == 'ArrowLeft'){
        px -= 10
        div1.style.left = px+'px'
    } else if(tecla == 'ArrowUp'){
        py -=10
        div1.style.top = py + 'px'
    } else if(tecla == 'ArrowRight'){
        px += 10
        div1.style.left = px + 'px'
    } else if(tecla == 'ArrowDown'){
        py += 10
        div1.style.top = py + 'px'
    }

    console.log(tecla)
})