//ACARD.JS
// @ts-check
class Card {
  constructor(name, classe, id, ataque, defesa, vida) {
    this.name = name;
    this.classe = classe;
    this.id = id;
    this.ataque = ataque;
    this.defesa = defesa;
    this.vida = vida;
    this.frente = `./assets/bang/${classe}/${name}.png`;
    //this.verso = `./assets/bang/${classe}/_back.png`;
    const board = document.getElementById("board");
    //const li = document.createElement("li"); 
    const imgFront = document.createElement("img"); // <img />
    imgFront.id = this.id
    imgFront.src = this.frente;
    imgFront.className = "show cardFront";
    board.appendChild(imgFront);
    document.getElementById(this.id).classList.add(this.classe,"deck");
  }

  getId() {
    return this.id;
  }

  

  selecionarAlvos([...array]) {
    for (let i of array) {
      // @ts-ignore
      document.getElementById(i).classList.add("alvos");
    }
  }


}
