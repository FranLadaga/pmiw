function dibujaMiArteOptico (mousepresionado) {

  for ( let i=0; i<18; i++) {
    rectMode(CENTER);
    let tam = map(i, 0, 18, 372, 0);
    let colorTemp;
    if (mousepresionado) {
      colorTemp = colores;
    } else {
      colorTemp = i%2*255;
    }
    fill(colorTemp);
    push();
    translate(600, 200);
    rect(0, 0, tam, tam);
    pop();

    for (let x=0; x<18; x++) {
      let tama= map(x, 1.5, 18, 372, 1);
      let colorTemp;
      if (mousepresionado) {
        colorTemp= colores;
      } else{
        colorTemp = x%2*255 ;
      }

      fill(colorTemp);
      push();
      translate(600, 200);
      rotate(radians(angulo));
      arc(0, 0, tama, tama, radians(164), radians(196));
      rotate (HALF_PI);
      arc(0, 0, tama, tama, radians(164), radians(196));
      rotate (HALF_PI);
      arc(0, 0, tama, tama, radians(164), radians(196));
      rotate(HALF_PI);
      arc(0, 0, tama, tama, radians(164), radians(196));
      pop();
    }
  }
};
