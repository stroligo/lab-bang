//BANG.JS
class Bang extends ACard {//rever exteds de card
  constructor(name, id) {
    super(name, id);
    this.atack = 1;
  }

  buscarAlvos() {
    return super.buscarAlvosProximos();
  }
}