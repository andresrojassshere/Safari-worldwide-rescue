let jugador = new Rescatador (50,50);
let imgCora;
let imgBat;
let imgAnt;
let imgJun;
let imDes;
let imSab;
let imBos;
let imOce;


function preload() {
  imgCora = loadImage("/assets/bateria.png");
  imgBat = loadImage("/assets/corazon.png");
  imgAnt = loadImage("/assets/antartida.png");
  imgJun = loadImage("/assets/jungla.png");
  imgDes = loadImage("/assets/desierto.png");
  imSab = loadImage("/assets/sabana.png");
  imBos = loadImage("/assets/bosque.png");
  imOce = loadImage("/assets/oceano.png");

  createImageBitmap

}

function setup() {
  createCanvas(1000, 600);
}

function draw() {
  background(220);



  switch (pantalla){


  case 0: //inicar juego
    break;

    case 1: //Anuncio nivel Antartida
    image(imgAntar, 0, 0);
   break;

   case 2: //Nivel Antartida
   break;

   case 3: //Anuncio Nivel Jungla
   image(imgJun,0,0);
   break;

   case 4: //Nivel Jungla
   break;

   case 5: //Anuncio Nivel Desierto
   img(imgDes,0,0);
   break;

   case 6: //Nivel Desierto
   break;

   case 7: //Anuncio nivel sabana
   img(imgSab,0,0);
   break;

   case 8: //Nivel sabana
   break;

   case 9: //Anuncio nivel Bosque
   img(imgBos,0,0);
   break;

   case 10: //Nivel Bosque
   break;

   case 11: //Anuncio nivel oceano
   img(imgOce,0,0);
   break;
  }


  //corazón
  image(imgCora, 30,30);
  image(imgBat, 70,30);


  jugador.mostrar();
  jugador.mover();

 
  ellipse (50,50,50,50);

}
