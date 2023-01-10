const inputTexto = document.getElementById('input-texto');
const encryptb = document.getElementById("encrypt");
const decryptb = document.getElementById("decrypt");
const inputResultado = document.getElementById("text-result");
const copyB = document.getElementById("copyB");
const soloLetras ='^[a-z !ñ]+$';

document.addEventListener('DOMContentLoaded', () => {

    encryptb.addEventListener('click', encriptarT);
    decryptb.addEventListener('click', desencriptarT);
    copyB.addEventListener('click', copiarT);

});
function encriptarT(e) {
    e.preventDefault();
    inputResultado.value = '';
    let texto = inputTexto.value;
    
    if(texto.match(soloLetras)!=null){
        let palabras = texto.split(' ');
        let nuevasPalabras = [];

        for (let palabra of palabras) {
            palabra = palabra.replaceAll('e','enter');
            palabra = palabra.replaceAll('i','imes');
            palabra = palabra.replaceAll('a','ai');
            palabra = palabra.replaceAll('o','ober');
            palabra = palabra.replaceAll('u','ufat');      
            
            nuevasPalabras.push(palabra);    
        }
    
    const resultado = nuevasPalabras.join(' ');

    inputResultado.value = resultado;
    } else {
        mostrarError('Solo se permiten letras minúsculas, sin acentos');
        return;
    }  
}

function desencriptarT(e) {
    e.preventDefault();  
    inputResultado.value = '';
    let texto = inputTexto.value;

    if(texto.match(soloLetras)!=null){
        let palabras = texto.split(" ");
        let nuevasPalabras = [];    

        for (let palabra of palabras) {
            palabra = palabra.replaceAll('enter','e');
            palabra = palabra.replaceAll('imes','i');
            palabra = palabra.replaceAll('ai','a');
            palabra = palabra.replaceAll('ober','o');
            palabra = palabra.replaceAll('ufat','u');
            nuevasPalabras.push(palabra);    
        }

        const resultado = nuevasPalabras.join(' ');

        inputResultado.value = resultado;
    } else {
        mostrarError('Solo se permiten letras minúsculas, sin acentos');
        return;
    }  
}

function mostrarError(mensaje) {
    const existeError = document.querySelector('.error');
    
    if(!existeError) {
        const formulario = document.getElementById('formulario');
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('error');
    
        divMensaje.textContent = mensaje;            
        formulario.appendChild(divMensaje);
        
        setTimeout(()=> {
            divMensaje.remove();
        }, 3000);
    }
}

function copiarT(e) {
        e.preventDefault(); 
        const mensaje = inputResultado.value;

        navigator.clipboard.writeText(mensaje);
}