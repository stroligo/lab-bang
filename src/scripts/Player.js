//APLAYER.JS

class Player extends Card {
  constructor(name, classe, id, pseudoname, hp = 5, range = 1, spot = 1) {
    super(name, classe, id);
    this.pseudoname = pseudoname;
    this.hp = hp;
    this.range = range;
    this.spot = spot;
    this.hand = [];
  }

  ComprarCartas(carta, tipo) {
    const copia = carta
    this.hand.push(carta);


    console.log(`${this.pseudoname} comprou uma carta`);
    console.log("id da classe player" + this.id);
    console.log("name" + this.name);
    console.log("classe" + this.classe);

    if (tipo == 2) { //role  

      //document.getElementsByClassName(this.id)[0].children[0].appendChild(document.createElement("lia"))
      document.getElementById(this.id).children[0].lastElementChild.appendChild(document.getElementById(copia.id).cloneNode(true)).classList.remove("hidden")
      document.getElementById(copia.id).remove()
    }


    if (tipo == 0) {

      // document.getElementById(carta.id).className = "apagar"
      //document.getElementsByClassName(this.id)[0].children[1].children[0].appendChild(document.createElement("li"))
      document.getElementById(this.id).children[1].lastElementChild.appendChild(document.getElementById(copia.id).cloneNode(true)).classList.remove("hidden")
      //document.getElementsByClassName("apagar")[0].remove();
      document.getElementById(copia.id).remove()
    }

    if (tipo == 3) {

      // document.getElementById(carta.id).className = "apagar"
      //document.getElementsByClassName(this.id)[0].children[1].children[0].appendChild(document.createElement("li"))
      document.getElementById(this.id).children[1].lastElementChild.appendChild(document.getElementById(copia.id).cloneNode(true)).classList.remove("hidden")
      //document.getElementsByClassName("apagar")[0].remove();
      document.getElementById(copia.id).remove()
    }

  }

  //getStpot(id, role) {
  //return role.filter(element => element.id == id)[0].spot
  //}

  setSpot(value) {
    this.spot = value;
  }

  getSpot() {
    return this.spot;
  }


  setHP(value) {
    this.hp += value;
      const vida = document.getElementsByClassName("turn")[0].children[0].children[1].children[1].children[0].children[0]

    if (value < 0) {
      vida.children[0].remove()
      console.log("Voce foi atingido")
      }  
    if (value > 0) {
      const node = vida;
     const clone = node.cloneNode(true);
      vida.appendChild(clone);
        }    
    
    
    }


}


