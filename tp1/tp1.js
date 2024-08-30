// Francisco Ladaga 88293/6 comison 1, video explicativo: https://youtu.be/6OtgSKf_Hk4
let angulo;
let colores;
let mousepresionado = false;
let tam;
let ilusion;


function preload () {
  ilusion = loadImage("./datan't/ilusion.jpg");
}
function setup() {
  createCanvas (800, 400);
  colores= 255 ;
}


function draw() {

  background(255);
  image( ilusion, 0, 0, 400, 400);
  if (mousepresionado) {
    angulo = mouseX;
    colores = calculaColorDistanciaMouse();
  }
  dibujaMiArteOptico (mousepresionado);
}
//provoco el efecto
function mousePressed() {
  mousepresionado = !mousepresionado;
};


function calculaColorDistanciaMouse() {
  // Calcular la distancia entre el mouse y el borde derecho de la ventana
  let distanciaDerecha = width - mouseX;
  // Mapear la distancia a un rango de colores
  let colorValue = map(distanciaDerecha, 0, width, 0, 255);
  let colorCalculado = color(colorValue, 150, 255 - colorValue);

  return colorCalculado;
}
