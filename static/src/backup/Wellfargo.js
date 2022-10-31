//WELLFARGO
class Wellfargo extends Weapon {
  constructor(name, id) {
    super(name, id);
    this.atack = 3;
  }

  buscarAlvos() {
    return super.buscarAlvoSiProprio();
  }
}
