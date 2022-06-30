var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujarPorClick);

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");
var borde = ancho -1;


/*
var colorcito = "#FAA"
  l=0;
do
{

  yi = 10 * (l + 1);
  xf = 10 * l;
dibujarLinea(colorcito, 300, yi, xf, 0);
  console.log("linea " + l);
  l++;
}
while (l < lineas);

dibujarLinea("colorcito", 1, 1, 1, 299);
dibujarLinea("colorcito", 1, 299, 299, 299);

*/



function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarPorClick()
{


  var lineas =parseInt(texto.value);
  var l = 0;
  var yi, xf;
  var colorcito = "#FAA"
  var espacio = ancho / lineas;

  do
  {
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujarLinea("colorcito", 0, yi, xf, 300);
    console.log("linea " + l);
    l++;
  }
  while (l < lineas);

  dibujarLinea("colorcito", 1, 1, 1, borde);
  dibujarLinea("colorcito", 1, borde, borde, borde);
}
