//Ator (vaquinha)
let xAtor = 100;
let yAtor = 366;
let larguraAtor = 30;
let alturaAtor = 30;
let colisao = false;
let meusPontos = 0;
let pontosErro = 0;

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
      if(podeSeMover()) {
        yAtor += 4;
      }
    }
  }

function verificaColisao() {
  for(i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro,
    xAtor, yAtor, 15);
      if(colisao) {
        yAtor = 366;
        meusPontos--;
        somColidiu.play();
      }
  }
}

function incluiPontos() {
  textAlign(CENTER);
  fill(255, 165, 0)
  textSize(26);
  text(meusPontos, 150, 27);
}

function marcaPonto() {
  if (yAtor <= 27) {
    meusPontos++;
    yAtor = 366;
    somPontos.play();
  }
}

function verificaPontos() {
  if(meusPontos <= 0) {
    meusPontos = 0;
  }
}

function podeSeMover() {
  return yAtor < 366;
}