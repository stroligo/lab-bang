//ESQUIVA.JS
class Esquiva extends Weapon {
  constructor(name, id) {
    super(name, id);
    this.atack = 1;
  }

  buscarAlvos() {
    return super.buscarAlvoSiProprio();
  }
}