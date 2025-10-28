let salida = document.getElementById('resultado');
let actualSalida = '';

function calculando(valor) {
    actualSalida += valor;
    salida.innerHTML = actualSalida;
}

function limpiarSalida() {
    actualSalida = '';
    salida.innerHTML = '0';
}

function calculo() {
    try {
        actualSalida = eval(actualSalida).toString();
        salida.innerHTML = actualSalida;
    } catch (error) {
        salida.innerHTML = 'Error';
    }
}