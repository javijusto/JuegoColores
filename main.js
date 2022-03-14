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

console.log(rgb[0]);
console.log(rgb.toString());

const topBox = document.querySelector("#top");
const midBox = document.querySelector("#mid");
const botBox = document.querySelector("#bot");
//prueba de vinculación
/* topBox.setAttribute(
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
      ); */
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
  } else {
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
