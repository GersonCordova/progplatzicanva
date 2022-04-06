var d = document.getElementById("dibujito"); //metodo del documento que trae un documento atraves de su id con un parametro que es su Id
var lienzo = d.getContext("2d"); //metodo del objeto canvas
var lineas = 30;
var l = 0;
var yi,xf;
var colorsito = "black";

while (l < lineas) {
  yi = 10*l;
  xf = 10*(l+1);
  dibujarLinea(colorsito,0,yi,xf,300);
  dibujarLinea(colorsito,300,yi,xf,0);
  l = l +1;
}
dibujarLinea(colorsito,0,0,0,300);
dibujarLinea(colorsito,0,300,300,300);


function dibujarLinea(color,xinicial,yinicial,xfinal,yfinal)
{
  lienzo.beginPath(); //inicio
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial,yinicial);
  lienzo.lineTo(xfinal,yfinal);
  lienzo.stroke();
  lienzo.closePath();// cierre

}
