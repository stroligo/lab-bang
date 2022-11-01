//BEER.JS
// @ts-check
class Beer extends Card {
  constructor(name, id) {
    super(name, 'cards', id);
    this.atack = 1;
  }

  buscarAlvos() {
    //return super.buscarAlvoSiProprio();
  }
}
