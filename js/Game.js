class Game {
  constructor() {}

  start() {
    form = new Form();
    form.display();
    player = new Player();
    contagemJogadores = player.contagemPlayer();
    carro1 = createSprite (width/2-210,height-50);
    carro2 = createSprite (width/2+170,height-50);

  carro1.addImage("carss1",car1);
  carro2.addImage("carss2",car2);

  carro1.scale = 0.1;
  carro2.scale = 0.1;

   carros = [carro1,carro2]

  }

  getestado() {
    var armaza = database.ref("estadojogo");
    armaza.on("value",function(data){estadojogo = data.val()});
   
  }

  atualizaestado(valor) {
    database.ref("/").update({estadojogo:valor})
   }

   play(){
    
    image(pista,0,-height*4,width,height*5)
    drawSprites();
    form.hide();
    this.movimento();

    Player.getPlayersInfo()
    var indice = 0;
    for(var i in info_jogadores) { 
      indice = indice +1;
      var X = info_jogadores[i].posX
      var Y = info_jogadores[i].posY
      carros[indice-1].position.x = X
      carros[indice-1].position.y = Y
    }

   }

   movimento() {
     if (keyDown("w")) {player.posY = player.posY + 5
      console.log("teste")
      player.atualizaPos()
    }

   }
}
  