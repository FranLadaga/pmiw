// Francisco Ladaga 88293/6 comison 3, video explicativo: https://youtu.be/kee3s30z65E
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
  colores= (255, 0, 0) ;
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
  let distanciaDerecha =  mouseX;
  // Mapear la distancia a un rango de colores
  let colorValue = map (distanciaDerecha, 100, width, 0, 255);
  let colorCalculado = color(colorValue, 150, 0, 200);

  return colorCalculado;
}
