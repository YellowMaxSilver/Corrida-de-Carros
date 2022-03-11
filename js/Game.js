class Game {
  constructor() {}

  start() {
    form = new Form();
    form.display();
    player = new Player();
  }

  getestado() {
    var armaza = database.ref("estadojogo");
    armaza.on("value",function(data){estadojogo = data.val()});
   
  }
}
