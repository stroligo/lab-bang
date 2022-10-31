//CARD.JS
class Card {
  constructor(name, classe, id) {
    this.name = name;
    this.alt = name;
    this.id = id;
  }

  buscarAlvosProximos() {
    const spot = document.querySelector(".selecionado").id;
    const proximo = (spot % 4) + 1;
    let anterior;
    spot == 1 ? (anterior = 4) : (anterior = spot - 1);
    return [anterior, proximo];
  }

  buscarAlvoSiProprio() {
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
      document.getElementById(i).classList.add("alvos");
    }
  }


}
