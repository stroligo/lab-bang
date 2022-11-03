//BANG.JS

class Bang extends Card {//rever exteds de card
  constructor(name, classe, id, atack = 1, defesa =0, vida = 0) {
    super(name, classe, id, atack, defesa, vida);
  }

  buscarAlvos(spot) {
    return buscarAlvosProximos(spot);
  }
}