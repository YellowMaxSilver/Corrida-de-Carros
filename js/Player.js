class Player {
  constructor() {

    this.name = null;
    this.posX = 0;
    this.posY = 0;

    this.classifi = null;
  }
  
  //atualizar
   atualizaPlayer(valor) {
    database.ref("/").update({contagemJogadores:valor})
   }

   //numero de player
   contagemPlayer() {
     var player = database.ref("contagemJogadores");
     player.on("value",data => {contagemJogadores = data.val()})
   }

   addPlayer() {
    var Jogador = "jogadores/jogador" + this.classifi;
    if (this.classifi == 1) {this.posX = 10;}
    if (this.classifi == 2) {this. posX = 30;}
    database.ref(Jogador).set({name:this.name,posX:this.posX,posY:this.posY});

   }


   atualizaPos() {
     var Jogador = "jogadores/jogador" + this.classifi;
     console.log(Jogador)
     database.ref(Jogador).update({posX:this.poxX,posY:this.posY});
     
   }

   static getPlayersInfo() { var playerInfoRef = database.ref("Jogadores");
    playerInfoRef.on("value", data => { info_jogadores = data.val(); }); }

}
