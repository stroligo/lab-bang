//ACARD.JS
// @ts-check
class Card {
  constructor(name, classe, id) {
    this.name = name;
    this.classe = classe;
    this.id = id;
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

  buscarAlvosProximos() {
    // @ts-ignore
    const spot = (document.querySelector(".selecionado").id) * 1;
    const proximo = (spot % 4) + 1;
    let anterior;
    spot == 1 ? (anterior = 4) : (anterior = spot - 1);
    return [anterior, proximo];
  }

  buscarAlvoSiProprio() {
    // @ts-ignore
    return document.querySelector(".selecionado").id;
  }

  buscarAlvoTodos() {
    const spot = document.getElementsByClassName("player selecionado")[0].id;
    return [...document.getElementsByClassName("player")]
      .map((element) => element.id)
      .filter((element) => element != spot);
  }

  selecionarAlvos([...array]) {
    for (let i of array) {
      // @ts-ignore
      document.getElementById(i).classList.add("alvos");
    }
  }


}
