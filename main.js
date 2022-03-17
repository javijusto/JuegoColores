function numeroAleatorio() {
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

function gameOver(aciertos) {
  window.alert("GAME OVER\nPuntuación: " + aciertos);
  location.reload();
}

function juego() {
  rgb = numeroAleatorio();
  cuadroIzquierda.innerHTML = "<p>RGB: " + rgb + "</p>";
  console.log(rgb.toString());
  colorAleatorio(rgb);
}

//funcion actualizada con el marcador.
function boxClick(e) {
  const item = e.target;

  if (item.style.backgroundColor === `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`) {
    if (!winCount.hasAttribute("data-count")) {
      winCount.setAttribute("data-count", 0);
    }
    const counter = +winCount.dataset.count + 1;

    winCount.setAttribute("data-count", counter);

    winCount.textContent = counter;
  }
  if (item.style.backgroundColor !== `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`) {
    if (!loseCount.hasAttribute("data-count")) {
      loseCount.setAttribute("data-count", 0);
    }

    const counter1 = +loseCount.dataset.count + 1;

    loseCount.setAttribute("data-count", counter1);

    loseCount.textContent = counter1;
    console.log(winCount.textContent);
    if(counter1===3){
      gameOver(winCount.textContent);
    }
  }
  juego();
}


var rgb;
var countFinal = 0;
const cuadroIzquierda = document.querySelector("section p");
const topBox = document.querySelector("#top");
const midBox = document.querySelector("#mid");
const botBox = document.querySelector("#bot");

topBox.addEventListener("click", boxClick);
midBox.addEventListener("click", boxClick);
botBox.addEventListener("click", boxClick);

juego();

let count = document.querySelectorAll("td");
let winCount = document.querySelector("#win");
let loseCount = document.querySelector("#lose");
