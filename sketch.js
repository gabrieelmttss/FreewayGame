let xAtor = 100;
let yAtor = 366;
let larguraAtor = 30;
let alturaAtor = 30;

let xCarro = 460;
let yCarro = 45;

let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;

function preload(){
  imagemDaEstrada = loadImage("material/estrada.png");
  imagemDoAtor = loadImage("material/ator-1.png");
  imagemCarro = loadImage("material/carro-1.png");
}

function setup() {
  createCanvas(500, 400);
}

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, larguraAtor, alturaAtor);
}

function movimentaAtorCima () {
  if (keyIsDown(UP_ARROW)){
    yAtor -= 4;
  }
}

function movimentaAtorBaixo () {
  if (keyIsDown(DOWN_ARROW)){
    yAtor += 4;
  }
}

function mostraCarro() {
  image(imagemCarro, xCarro, yCarro, 40, 30);
}

function movimentaCarro() {
  xCarro -= 3;
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtorCima();
  movimentaAtorBaixo();
}

