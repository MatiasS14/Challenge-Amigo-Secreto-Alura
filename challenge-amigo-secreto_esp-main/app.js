let listaAmigos = [];
let amigoSeleccionado = "";


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
    let listaHTML = document.getElementById('listaAmigos'); 
    listaHTML.innerHTML='';
    listaAmigos.forEach(amigo => {
        //crea un nodo li para agregar en html
        var node = document.createElement('li');
        //le agrego el string al nodo
        node.appendChild(document.createTextNode(amigo));
        //agrego el nodo li al la lista ul en el html
        listaHTML.appendChild(node);
    });

}