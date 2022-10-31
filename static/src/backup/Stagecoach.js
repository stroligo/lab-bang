//STAGECOACH.JS
class Stagecoach extends Weapon {
  constructor(name, id) {
    super(name, id);
    this.atack = 2;
  }

  buscarAlvos() {
    return super.buscarAlvoSiProprio();
  }
}

