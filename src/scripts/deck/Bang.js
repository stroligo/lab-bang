//BANG.JS

class Bang extends Card {//rever exteds de card
  constructor(name, id, atack = 1, defesa =0, vida = 0) {
    super(name, 'cards', id, atack, defesa, vida);
  }

  buscarAlvos(spot) {
    return buscarAlvosProximos(spot);
  }
}