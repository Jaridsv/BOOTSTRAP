function limpiar() {
    document.getElementById('formulario').reset();
}

function sumar() {
    var a = parseInt(document.getElementById('valor1').value);
    var b = parseInt(document.getElementById('valor2').value);
    document.getElementById('El-resultado').innerHTML = a+b;
}

function restar() {
    var a = parseInt(document.getElementById('valor1').value);
    var b = parseInt(document.getElementById('valor2').value);
    document.getElementById('El-resultado').innerHTML = a-b;
}

function multiplicar() {
    var a = parseInt(document.getElementById('valor1').value);
    var b = parseInt(document.getElementById('valor2').value);
    document.getElementById('El-resultado').innerHTML = a*b;
}

function dividir() {
    var a = parseInt(document.getElementById('valor1').value);
    var b = parseInt(document.getElementById('valor2').value);
    document.getElementById('El-resultado').innerHTML = a/b;
}