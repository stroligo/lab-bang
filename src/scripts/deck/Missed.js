//ESQUIVA.JS

class Missed extends Card {
  constructor(name, classe , id, atack = 0, defesa =1, vida = 0) {
    super(name, classe, id, atack, defesa, vida);
  }
 
  buscarAlvos(spot) {
    return buscarAlvoSiProprio(spot);
  }
}
