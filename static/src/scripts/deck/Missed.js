//ESQUIVA.JS
// @ts-check
class Missed extends Card {
  constructor(name, id) {
    super(name, 'cards', id);
    this.atack = 1;
  }

  buscarAlvos() {
    //return super.buscarAlvoSiProprio();
  }
}
