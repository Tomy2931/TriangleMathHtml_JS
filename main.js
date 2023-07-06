const lado1 = document.querySelector('.lado1');
const lado2 = document.querySelector('.lado2');
const base = document.querySelector('.base');
const altura = document.querySelector('.altura');
const ayuda = document.querySelector('.ayuda')

const area = document.querySelector('.area');
const perimetro = document.querySelector('.perimetro');

const buttonA = document.querySelector('.buttonA')
const buttonP = document.querySelector('.buttonP')


ayuda.addEventListener('click', cartelAyuda);
lado1.addEventListener('click', fLado1);
lado2.addEventListener('click', fLado2);
base.addEventListener('click', fBase);
altura.addEventListener('click', fAltura);
buttonA.addEventListener('click', CalcularArea)
buttonP.addEventListener('click', CalcularPerimetro)


let InputLado1 = 0
let InputLado2  = 0
let InputBase = 0
let InputAltura  = 0

function cartelAyuda(){
    alert('Haz click sobre los diferentes lados del triangulo y escribe sus valores para calcularlos con los botones de abajo')
}


function OnlyInt(num){  //Filtro de numeros
    if ((isNaN(num) == true) || (num === null) || (num <=0)){
        alert('Ingrese un valor valido');
        return true
    }
    return false
}

function fLado1(){
    InputLado1 = parseInt(prompt("Ingrese lado 1 del triangulo"));
    if (OnlyInt(InputLado1) == false){
        lado1.innerText = InputLado1 + ' cm'
        return InputLado1
    }
}

function fLado2(){
    InputLado2 = parseInt(prompt("Ingrese lado 2 del triangulo"));
    if (OnlyInt(InputLado2) == false){
        lado2.innerText = InputLado2 + ' cm'
        return InputLado2
    }

}
function fBase(){
    InputBase = parseInt(prompt("Ingrese la base del triangulo"));
    if (OnlyInt(InputBase) == false){
        base.innerText = InputBase + ' cm'
        return InputBase
    }
}
function fAltura(){
    InputAltura = parseInt(prompt("Ingrese la altura del triangulo"));
    if (OnlyInt(InputAltura) == false){
        altura.innerText = InputAltura + ' cm'
        return  InputAltura
    }
}

// (base * altura) / 2 
function CalcularArea(){
    if (InputBase > 0 && InputAltura > 0 ){
        let resultado = ((InputBase * InputAltura) / 2) 
        area.innerText = ('El area es ' + InputBase + ' x ' +  InputAltura +  ' / 2 = ' ) + resultado
    }
    else{
        if (InputBase<=0){
            alert('Falta la base')
        }
        if (InputAltura<=0){
            alert('Falta la altura')
        }
    }

}

// Perimetro L+L+L

function CalcularPerimetro(){
    if (InputLado1 > 0 && InputLado2 > 0 && InputBase > 0){
        let resultado = (InputLado1 + InputLado2 + InputBase)
        perimetro.innerText = ('El perimetro es ' + InputLado1 + ' + ' + InputLado2 + ' + ' + InputBase + ' = ' + resultado)
    }
    else{
        if (InputBase<=0){
            alert('Falta la base')
        }
        if (InputLado1<=0){
            alert('Falta el lado 1')
        }
        if (InputLado2<=0){
            alert('Falta el lado 2')
        }
    }
}

