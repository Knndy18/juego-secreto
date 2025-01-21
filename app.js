//generamos numero y inicializamos intentos
let numeroSecreto=0;
let intento=0;
let listaNumerosSorteados=[];
let intentosMax=10;
condicionesIniciales();

console.log(listaNumerosSorteados);
//funcion para generar numero secreto
    
    function generarNumeroSecreto() {
        console.log(numeroSecreto);
        console.log(listaNumerosSorteados);
        let numSecreto= Math.floor(Math.random()*intentosMax)+1;

        if(listaNumerosSorteados.length==intentosMax){
            asignarTextoElemento('p','ya se sortearon todos los numeros posibles');
        }else{
            if(listaNumerosSorteados.includes(numSecreto)){
                return generarNumeroSecreto();
            } else{
                listaNumerosSorteados.push(numSecreto);
                return numSecreto;
            }
        }
    }


//creamos una funcion, apartir del clic en el boton,(captura)
    function intentoDeUsuario(){
        alert('la funcion funciona correctamente');
    }


//funccion optimixzada usando parametros
    function asignarTextoElemento(etiqueta,texto){
        let titulo=document.querySelector(etiqueta);
        titulo.innerHTML=texto;
    }


//creamos una funcion para capturar la caja imput con id
function verificarIntento() {
    let imput=parseInt(document.getElementById('valorUsuario').value);
    console.log(imput);
    document.getElementById('reiniciar').removeAttribute('disabled');    
    

    // === igualar valor y tipo de dato
    //no acerto
    if(imput===numeroSecreto){
        asignarTextoElemento('p',`acertaste el número en ${intento} ${(intento===1) ? 'vez':'veces'}`);
    }  else{
            if(imput>numeroSecreto){
                asignarTextoElemento('p','el número secreto es menor');
            }else{
                asignarTextoElemento('p','el numero secreto es mayor');
            }
        intento++;
        limpiarCaja();
        }
    
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value='';
}

function condicionesIniciales() 
{
    asignarTextoElemento('h1','juego one, adivina el numero secreto');
    asignarTextoElemento('p',`escoge el numero  entre 1-${intentosMax}`);
    numeroSecreto=generarNumeroSecreto();
    intento=1;
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
