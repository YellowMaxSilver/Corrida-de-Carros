var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;

var contagemJogadores  = 0;
var estadojogo;

var carro1;
var carro2;

var info_jogadores;

var caminho;

var carros = []

function preload() {
  backgroundImage = loadImage("./assets/planodefundo.png");

  car1 = loadImage ("./assets/car1.png");
  car2 = loadImage ("./assets/car2.png");

  pista = loadImage ("./assets/track.jpg");

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getestado();
  game.start();

  estadojogo = 0;
  contagemJogadores = 1;

}

function draw() {
  background(backgroundImage);


  if (contagemJogadores == 2) {game.atualizaestado(1)}

  if (estadojogo == 1) {game.play()};
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
