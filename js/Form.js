class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Digite seu nome");
    this.playButton = createButton("Jogar");
    this.playButton2 = createButton("voltar");
    this.titleImg = createImg("./assets/TITULO.png", "nome do jogo");
    this.greeting = createElement("h2");
  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }

  lauch() {

    this.input.class("customInput");
    this.playButton.class("customButton");
    this.playButton2.class("customButton");
    this.titleImg.class("gameTitle");
    this.greeting.class("greeting");

  }

  posicao() {

   this.titleImg.position(width/2-500,7)
   this.input.position(width/2-100,height/2);
   this.playButton.position(width/2-100,height/2+100);
   this.playButton2.position(width/2-500,height/2+100);
   this.greeting.position(width/2,height/2+100)
  }
//show
  buttons() {
   this.playButton.mousePressed(
   () => {
    this.input.hide();
    this.playButton.hide();
    var mensagem = 'esperando jogadores';
    this.greeting.html(mensagem); 
    

    contagemJogadores += 1
    player.name = this.input.value();
    player.classifi = contagemJogadores;
    console.log(player.classifi)
    player.addPlayer();
    player.atualizaPlayer(contagemJogadores);
    console.log(contagemJogadores);
   }
   ) 
   
  }

  

  display()  {
    this.lauch();
    this.posicao();
    this.buttons();
  }

}
