const BotonNumeros = document.getElementsByName('numero');
const BotonOperaciones = document.getElementsByName('operacion');
const BotonIgual = document.getElementsByName('igual')[0];
const BotonDelete = document.getElementsByName('borrar')[0];
const BotonDeleteAll = document.getElementsByName('borrartodo')[0];

var Pantalla = document.getElementById('pantalla');
var opeAnterior = '';
var opeActual = '';
var operacion = undefined;

BotonNumeros.forEach(function (boton) {
    boton.addEventListener('click', function () {
        agregarNumero(boton.innerText);
    })
});


BotonOperaciones.forEach(function (boton) {
    boton.addEventListener('click', function () {
        selectOperacion(boton.innerText);
    })
});

BotonIgual.addEventListener('click', function () {
    calcular();
    actualizarDisplay();

})

BotonDelete.addEventListener('click', function () {
    clear();
    actualizarDisplay
})

BotonDeleteAll.addEventListener('click', function () {
    allClear();
    actualizarDisplay();
})


function selectOperacion(op) {

    if (opeActual === '') return;

    if (opeAnterior !== '') {
        calcular()
    }

    operacion = op.toString();
    opeAnterior = opeActual;
    opeActual = '';

}

function calcular() {

    const anterior = parseFloat(opeAnterior);
    const actual = parseFloat(opeActual);

    if (isNaN(anterior) || isNaN(actual)) return;

    switch (operacion) {
        case '+':
            calculo = anterior + actual;
            break;
        case '-':
            calculo = anterior - actual;
            break;
        case 'x':
            calculo = anterior * actual;
            break;
        case '÷':
            calculo = anterior / actual;
            break;
        case '^':
            calculo = anterior ** actual;
            break;
        case '√':
            calculo = Math.pow(anterior, 1/actual)
            break;
        default:
            return;
    }

    opeActual = calculo;
    operacion = undefined;
    opeAnterior = '';
}

function agregarNumero(num) {
    opeActual = opeActual.toString() + num.toString();
    actualizarDisplay();
}

function clear() {
    opeAnterior = opeAnterior.toString().slice(0, -1)
    opeActual = opeActual.toString().slice(0, -1);
    actualizarDisplay();
}

function allClear() {
    opeActual = '';
    opeAnterior = '';
    operacion = undefined;
}

function actualizarDisplay() {
    Pantalla.value = opeActual;
}
