//Ator (vaquinha)
let xAtor = 100;
let yAtor = 366;
let larguraAtor = 30;
let alturaAtor = 30;

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