//CARDACTION.JS
class CardAction extends Card {
  constructor(name, id) {
    super(name, "action", id);
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

  atacar([array]) {}
}

//constructor (id, nome, tipo, ataque, defesa, hp, source, ncards, teste){
