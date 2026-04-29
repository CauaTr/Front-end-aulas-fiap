let teste = 1;

switch (teste) {
    case 1:
        console.log("Abre a página 1")
        break;
    case 2:
        console.log("Abre a página 2");
        break;
    default:
        console.log("A página solicitada não existe!");

        break;
}

for (let index = 0; index < 5; index++){
    console.log(`Esta é a verificação ${index}`);
}

let frutas = ['banana', 'maçã', 'uva', 'pera']

for(let index = 0; index < frutas.length; index++){
    console.log(`A fruta da vez é ${frutas[index]}`);
}

for (let fruta in frutas){
    console.log(`A fruta esta na posição ${fruta}`);
}

for (let fruta of frutas){
    console.log(`A fruta da vez é ${fruta}`);
}

let cont = 0

while(cont < 10){
    console.log(`Esta é a volta ${cont}`);
    cont++
}

let cont2 = 0
do{
    console.log(`Esta é a volta ${cont2}`);
    cont2++
} while(cont2 < 10)

function aviso(){
    alert("Este é um teste de função")
}

//aviso()

function soma(num1, num2){
    return num1 + num2
}

console.log(soma(4,5));

let titulo = document.getElementById("titulo")

console.log(titulo);

let texto = document.getElementById('texto')

function mudar(){
    titulo.innerHTML = texto.value
}

let noticia = document.getElementsByClassName('noticia')

console.log(noticia);

//------------------------------------------------------------

document.querySelector('#titulo').style.color = 'blue';

document.querySelector('#titulo').style.backgroundColor = 'yellow'

console.log(document.querySelectorAll('li')[0])

console.log(document.querySelector('li'));

