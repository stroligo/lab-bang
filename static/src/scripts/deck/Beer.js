//BEER.JS

class Beer extends Card {
  constructor(name, id, atack = 0, defesa =0, vida = 1) {
    super(name, 'cards', id, atack, defesa, vida);
  }

  buscarAlvos(spot) {
    return buscarAlvoSiProprio(spot);
  }
}
