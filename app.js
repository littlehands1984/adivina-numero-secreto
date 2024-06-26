//Declaración de variables.
let num_secreto = 0;
let num_maximo = 10;
let jugadas = 0;
let max_intentos = 5;
let listaNumerosSorteados = [];

function asignarTexto(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function generaNumero() {
    numeroGenerado = Math.floor(Math.random()*num_maximo)+1;

    if (listaNumerosSorteados.length == num_maximo){
        asignarTexto('p', 'Ya se sortearon todos los números posibles.');
    }
    else{
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generaNumero();
        } else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
function condicionesIniciales() {
    asignarTexto('h1','Adivina el número secreto...');
    asignarTexto('p', `Indica un número del 1 al ${num_maximo}.`);
    num_secreto = generaNumero();
    jugadas = 1;
}
function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}
function verificarIntento(){

    let num_usuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (num_secreto === num_usuario){
        asignarTexto('p', `Felicidades! El número secreto es ${num_secreto}. Acertaste en ${jugadas} ${jugadas == 1 ? 'intento' : 'intentos'}.`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        if (num_usuario > num_secreto){
            asignarTexto('p', 'El número secreto es menor.');
        }
        else{
            asignarTexto('p', 'El número secreto es mayor.');
        }
        jugadas++;
        limpiarCaja();
        if (jugadas > max_intentos){
            asignarTexto('p', `Mejor suerte la próxima! Has alcanzado el máximo de intentos. El número secreto era ${num_secreto}.`);
            document.getElementById('reiniciar').removeAttribute('disabled');
        }
    }
    return;
}
function reiniciarJuego(){
    //Limpiar la caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números, genera # aleatorio e inicializa el # de intentos.
    condicionesIniciales();
    //Dehabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();