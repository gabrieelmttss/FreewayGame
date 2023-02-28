let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [45, 101, 155, 215, 268, 323]
let velocidadeCarros = [3, 4, 6, 8, 2.5, 3]
let comprimentoCarro = 40;
let alturaCarro = 30;

function mostraCarro() {
    for(let i = 0; i < imagemCarros.length; i++){
        image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
    }
  }
  
  function movimentaCarro() {
    for(let i = 0; i < imagemCarros.length; i++){
        xCarros[i] -= velocidadeCarros[i];
    }
  }

function voltaPosicaoInicialDoCarro() {
    for(let i = 0; i < imagemCarros.length; i++){
        if (xCarros[i] < -40){
            xCarros[i] = 600;
        }
    }
}