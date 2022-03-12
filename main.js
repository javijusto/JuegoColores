function numeroAleatorio(){
    var aleatorios = [] 
    for(let i=0; i<3; i++){
        aleatorios[i] = Math.floor(Math.random()*256)
    }
    return aleatorios;
}

const cuadroIzquierda = document.querySelector('section p');

cuadroIzquierda.innerHTML = "<p>RGB: " + numeroAleatorio() + "</p>";