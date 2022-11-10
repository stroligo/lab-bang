//APLAYER.JS

class Player extends Card {
  constructor(
    name,
    classe,
    id,
    pseudoname,
    rodada,
    hp = 5,
    range = 1,
    spot = 1,
    anterior = 0,
    proximo = 0,
    pos = 0
  ) {
    super(name, classe, id);
    this.rodada = rodada;
    this.pseudoname = pseudoname;
    this.hp = hp;
    this.range = range;
    this.spot = spot;
    this.anterior = anterior;
    this.proximo = proximo;
    this.hand = [];
    this.pos = pos;
  }

  setAnteriorProximo() {
    const totalPlayers = document.getElementsByClassName("player").length;
    this.proximo = (this.spot % totalPlayers) + 1;
    this.spot == 1
      ? (this.anterior = totalPlayers)
      : (this.anterior = this.spot - 1);
  }

  setSpot(value) {
    this.spot = value;
  }

  getPseudoname() {
    return this.pseudoname;
  }

  getSpot() {
    return this.spot;
  }

  getHP() {
    return this.hp;
  }

  setHP(value) {
    this.hp += value;
    const vida = document.querySelector(".turn .hp");

    if (value < 0) {

      if (this.id === "player1")
        document.querySelector("#player1 .hp li").remove();

      if (this.id === "player2")
        document.querySelector("#player2 .hp li").remove();

      // vida.children[0].remove();
      // document.getElementById("console").value += "Voce foi atingido\n";
    }
    if (value > 0) {
      const node = vida.children[0];
      const clone = node.cloneNode(true);
      vida.appendChild(clone);
    }



  }




}
