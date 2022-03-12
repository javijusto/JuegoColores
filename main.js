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
//prueba de vinculación
topBox.setAttribute(
  "style",
  `background-color: rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`
);
