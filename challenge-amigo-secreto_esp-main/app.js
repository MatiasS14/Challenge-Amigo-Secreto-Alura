let listaAmigos = [];

function agregarAmigo(){
    let amigoIngresado = document.getElementById('amigo').value;

    if(validarAmigo(amigoIngresado)){
        listaAmigos.push(amigoIngresado);
        document.getElementById('amigo').value = '';
        actualizarLista();
    }else{
        alert('Debe ingresar un nombre valido');
    }
}

function validarAmigo(amigo){
    //la funcion trim elimina los espacio vacios
    //lo que evita que se agreguen strings vacios
    return amigo.trim().length > 0;
}

function actualizarLista(){
    let listaHTML = elementoReiniciado('listaAmigos');
    listaAmigos.forEach(amigo => {
         listaHTML.appendChild(crearLi(amigo));
    });

}

function sortearAmigo(){
    if(listaAmigos.length > 0){
        let resultado = elementoReiniciado('resultado');
        resultado.appendChild(crearLi(listaAmigos[indiceAmigo()]));
    }else{
        alert("Debe ingresar al menos un amigo!");
    }
}

function indiceAmigo(){
    return Math.floor(Math.random()*listaAmigos.length);
}

function elementoReiniciado(idElemento){
    let element = document.getElementById(idElemento);
    element.innerHTML = '';
    return element;
}

function crearLi(elemento){
    let node = document.createElement('li');
    node.appendChild(document.createTextNode(elemento));
    return node;
}