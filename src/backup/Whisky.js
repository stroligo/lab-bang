//WHISKY.JS
class Whisky extends Weapon {
  constructor(name, id) {
    super(name, id);
    this.atack = 2;
  }

  buscarAlvos() {
    return super.buscarAlvoSiProprio();
  }
}
