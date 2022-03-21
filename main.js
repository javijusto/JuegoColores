var display= false; //controla el display de texto

function help(){ //muestra instrucciones
  console.log("ey");
  const info = document.getElementsByClassName("help");
  if(display === false){
    for(i=0; i<info.length; i++){
      info[i].style.color = "black";
    }
    display=true;
  }
  else {
    for(i=0; i<info.length; i++){
      info[i].style.color = "white";
    }
    display=false;
  }
}

function numeroAleatorio() { //genera el codigo
  var aleatorios = [];
  for (let i = 0; i < 3; i++) {
    aleatorios[i] = Math.floor(Math.random() * 256);
  }
  return aleatorios;
}

function colorAleatorio(rgb) {
  if (rgb[0] < 85) {
    topBox.setAttribute(
      "style",
      `background-color: rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`
    );
    midBox.setAttribute(
      "style",
      `background-color: rgb(${rgb[0] + 30}, ${rgb[1]}, ${rgb[2] + 30})`
    );
    botBox.setAttribute(
      "style",
      `background-color: rgb(${rgb[0] + 40}, ${rgb[1]}, ${rgb[2] + 40})`
    );
  }
  if (rgb[0] > 170) {
    topBox.setAttribute(
      "style",
      `background-color: rgb(${rgb[0] + 30}, ${rgb[1]}, ${rgb[2] + 30})`
    );
    midBox.setAttribute(
      "style",
      `background-color: rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`
    );
    botBox.setAttribute(
      "style",
      `background-color: rgb(${rgb[0] + 40}, ${rgb[1] + 40}, ${rgb[2]})`
    );
  }
  if (rgb[0] < 170 && rgb[0] > 85) {
    topBox.setAttribute(
      "style",
      `background-color: rgb(${rgb[0] + 30}, ${rgb[1]}, ${rgb[2] + 30})`
    );
    midBox.setAttribute(
      "style",
      `background-color: rgb(${rgb[0] + 40}, ${rgb[1] + 40}, ${rgb[2]})`
    );
    botBox.setAttribute(
      "style",
      `background-color: rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`
    );
  }
}

//funcion game over PERDER
function gameOver(aciertos) {
  return new Promise((resolve) => {
    swal({
      title: "DERROTA",
      text: "Aciertos: " + aciertos,
      icon: "error",
      button: "Nueva partida"
    });
    setTimeout(()=>{
      resolve();
    }, 1000);
  });
}
//funcion victoria GANAR
function victoria(fallos) {
  return new Promise((resolve) => {
    swal({
      title: "VICTORIA",
      text: "Errores: " + fallos,
      icon: "success",
      button: "Nueva partida",
    });
    setTimeout(()=>{
      resolve();
    }, 1000);
  });
}
//funcion juego, cada llamada es una ronda 
function juego() {
  rgb = numeroAleatorio();
  cuadroIzquierda.innerHTML = "<p>RGB: " + rgb + "</p>";
  console.log(rgb.toString());
  colorAleatorio(rgb);
}
//funcion para mostrar puntuacion de fallos
function PuntoLose(lose) {
  return new Promise((resolve) => {
    loseCount.textContent = lose;
    setTimeout(()=>{
      resolve();
    ;}, 250);
  });
}
//funcion para mostrar puntuacion de aciertos
function PuntoWin(win) {
  return new Promise((resolve) => {
    winCount.textContent = win;
    setTimeout(()=>{
      resolve();
    ;}, 250);
  });
}

//funcion asincrona que actualiza el marcador y reejecuta el juego()
async function boxClick(e) {
  const item = e.target;

  if (item.style.backgroundColor === `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`) {
    if (!winCount.hasAttribute("data-count")) {
      winCount.setAttribute("data-count", 0);
    }
    const counter = +winCount.dataset.count + 1;

    winCount.setAttribute("data-count", counter);

    await PuntoWin(counter);

    if(counter===3){
      victoria(loseCount.textContent);
      await PuntoLose(0);
      await PuntoWin(0);

      winCount.dataset.count=0;
      loseCount.dataset.count=0;
    }
  }
  if (item.style.backgroundColor !== `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`) {
    if (!loseCount.hasAttribute("data-count")) {
      loseCount.setAttribute("data-count", 0);
    }

    const counter1 = +loseCount.dataset.count + 1;

    loseCount.setAttribute("data-count", counter1);

    await PuntoLose(counter1);
    
    console.log(winCount.textContent);
    if(counter1===3){
      gameOver(winCount.textContent);
      await PuntoLose(0);
      await PuntoWin(0);
      winCount.dataset.count=0;
      loseCount.dataset.count=0;
      
    }
  }
  juego();
}

//variables
var rgb;
var countFinal = 0;
//selectores
const cuadroIzquierda = document.querySelector("section div h4");
const topBox = document.querySelector("#top");
const midBox = document.querySelector("#mid");
const botBox = document.querySelector("#bot");
let count = document.querySelectorAll("td");
let winCount = document.querySelector("#win");
let loseCount = document.querySelector("#lose");
//escucha 
topBox.addEventListener("click", boxClick);
midBox.addEventListener("click", boxClick);
botBox.addEventListener("click", boxClick);
//inicio del juego
juego();

