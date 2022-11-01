//BANG.JS
// @ts-check
class Bang extends Card {//rever exteds de card
  constructor(name, id) {
    super(name, 'cards', id);
    this.atack = 1;
  }

  buscarAlvos() {
    //return super.buscarAlvosProximos();
  }
}