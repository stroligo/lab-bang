//BEER.JS

class Beer extends Card {
  constructor(name, classe="beer", id, atack = 0, defesa =0, vida = 1) {
    super(name, classe, id, atack, defesa, vida);
  }

  buscarAlvos(spot) {
    return buscarAlvoSiProprio(spot);
  }
}
