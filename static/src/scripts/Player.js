//APLAYER.JS

class Player extends Card {
  constructor(name, pseudoname, id, hp = 5, range = 1, spot = 1) {
    super(name, "roles", id);
    this.pseudoname = pseudoname;
    this.hp = hp;
    this.range = range;
    this.spot = spot;
    this.hand = [];
  }

  ComprarCartas(carta, tipo) {

    this.hand.push(carta);


    console.log(`${this.pseudoname} comprou uma carta`);

    if (tipo == 2) { //role

      document.getElementsByClassName(this.id)[0].children[0].appendChild(document.createElement("li"))
      document.getElementsByClassName(this.id)[0].children[0].lastElementChild.appendChild(document.getElementById(carta.id).cloneNode(true))
      document.getElementById(carta.id).remove()
    }


    if (tipo == 0) {
      // document.getElementById(carta.id).className = "apagar"
      document.getElementsByClassName(this.id)[0].children[2].appendChild(document.createElement("li"))
      document.getElementsByClassName(this.id)[0].children[2].lastElementChild.appendChild(document.getElementById(carta.id).cloneNode(true))
      //document.getElementsByClassName("apagar")[0].remove();
      document.getElementById(carta.id).remove()
    }
  }

  //getStpot(id, role) {
  //return role.filter(element => element.id == id)[0].spot
  //}

  setSpot(value) {
    this.spot = value;
  }

  setHP(value) {
    this.hp = this.hp;
  }

  
}


