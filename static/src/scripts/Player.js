//APLAYER.JS
// @ts-check
class Player extends Card {
  constructor(name, pseudoname, id, hp = 5, range = 1) {
    super(name, "roles", id);
    this.range = range;
    this.pseudoname = pseudoname;
    this.hp = hp;
    this.hand = [];
    this.spot = 0;
  }

  ComprarCartas(carta,tipo) {



    document.getElementById(carta.id).classList.remove("deck")
    const copia = carta

    this.hand.push(copia);

    console.log(`${this.id} comprou uma carta`);
    if (tipo === 2) {
      document.getElementsByClassName(this.id)[0].children[2].appendChild(document.createElement("li"))
      document.getElementsByClassName(this.id)[0].children[2].lastElementChild.appendChild(document.getElementById(copia.id).cloneNode(true))
      document.getElementById(carta.id).remove()
    }
    if (tipo === 0) {
      console.log("x" + super.getId() + "x")
      document.getElementsByClassName(this.id)[0].children[0].appendChild(document.createElement("li"))
      document.getElementsByClassName(this.id)[0].children[0].lastElementChild.appendChild(document.getElementById(this.id).cloneNode(true))
      document.getElementById(this.id).remove()
    }



  }

  getStpot() {
    return this.spot
  }

  setSpot(value) {
    this.spot = value;
  }

  setHP(value) {
    this.hp = this.hp;
  }
}
