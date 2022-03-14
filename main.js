function numeroAleatorio() {
  var aleatorios = [];
  for (let i = 0; i < 3; i++) {
    aleatorios[i] = Math.floor(Math.random() * 256);
  }
  return aleatorios;
}

const cuadroIzquierda = document.querySelector("section p");
const rgb = numeroAleatorio();

cuadroIzquierda.innerHTML = "<p>RGB: " + rgb + "</p>";

console.log(rgb);
console.log(rgb.toString());

const topBox = document.querySelector("#top");
const midBox = document.querySelector("#mid");
const botBox = document.querySelector("#bot");

colorAleatorio(rgb);

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
      `background-color: rgb(${rgb[0] + 40}, ${rgb[1] + 40}, ${rgb[2]})`
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

function boxClick(e) {
  const item = e.target;
  if (item.style.backgroundColor === `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`) {
    console.log("1 win");
  } else console.log("1 fail");
}
topBox.addEventListener("click", boxClick);
midBox.addEventListener("click", boxClick);
botBox.addEventListener("click", boxClick);

let count = document.querySelectorAll("td");
let winCount = document.querySelector("#win");
let loseCount = document.querySelector("#lose");

/////Contador de clicks, falta enlazar similitud de color con  contador de wins y fails

function tdClickHandle(e) {
  const item = e.target;

  if (!item.hasAttribute("data-count")) {
    item.setAttribute("data-count", 0);
  }

  const counter = +item.dataset.count + 1;

  item.setAttribute("data-count", counter);

  item.textContent = counter;
}
/* 
winCount.addEventListener("click", tdClickHandle);
loseCount.addEventListener("click", tdClickHandle); */
