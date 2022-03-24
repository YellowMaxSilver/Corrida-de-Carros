class Game {
  constructor() {


    this.reset = createButton ("resetar")
  }

  class() {

    this.reset.class("customButton")
  }

  position() {
   this.reset.position(width/2+200,height/2)
  }

  pressed() {

    this.reset.mousePressed(
     ()=>{
      database.ref("/").set({
      contagemJogadores:0,
      estadojogo:0,
      jogadores:{}  
      })
      window.location.reload();

     }
    )
  }

  start() {
    form = new Form();
    form.display();
    player = new Player();
    contagemJogadores = player.contagemPlayer();
    carro1 = createSprite (width/2-210,height+150);
    carro2 = createSprite (width/2+170,height+150);

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
    
    Player.getPlayersInfo()
    image(pista,0,-height*4,width,height*5)
    form.hide();
    this.class();
    this.position();
    this.pressed();

    if (info_jogadores!==undefined) {
    var indice = 0;
    for(var i in info_jogadores) { 
      indice = indice +1;
      var X = info_jogadores[i].posX
      var Y = height-info_jogadores[i].posY
      carros[indice-1].position.x = X
      carros[indice-1].position.y = Y
      
    }
    this.movimento();
    drawSprites();

    }

   }

   movimento() {
     if (keyDown("w")) {player.posY = player.posY + 5
      console.log("teste")
      player.atualizaPos()
    }

   }
}
  