//ESQUIVA.JS

class Missed extends Card {
  constructor(name, id, atack = 0, defesa =1, vida = 0) {
    super(name, 'cards', id, atack, defesa, vida);
  }

  buscarAlvos(spot) {
    return buscarAlvoSiProprio(spot);
  }
}
