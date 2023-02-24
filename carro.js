//Carro 1
let xCarro = 600;
let yCarro = 45;
let velocidadeCarro1 = 3;

//Carro 2
let xCarro2 = 600;
let yCarro2 = 100;
let velocidadeCarro2 = 4;

//Carro 3
let xCarro3 = 600;
let yCarro3 = 155;
let velocidadeCarro3 = 6;

function mostraCarro() {
    image(imagemCarro, xCarro, yCarro, 40, 30);
    image(imagemCarro2, xCarro2, yCarro2, 40, 30);
    image(imagemCarro3, xCarro3, yCarro3, 40, 30);
  }
  
  function movimentaCarro() {
    xCarro -= velocidadeCarro1;
    xCarro2 -= velocidadeCarro2;
    xCarro3 -= velocidadeCarro3;
  }

function voltaPosicaoInicialDoCarro() {
    if (xCarro < -40){
        xCarro = 600;
    }
    if (xCarro2 < -50){
        xCarro2 = 600;
    }
    if (xCarro3 < -50){
        xCarro3 = 600;
    }
}