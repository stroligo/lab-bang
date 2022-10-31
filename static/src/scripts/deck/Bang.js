//BANG.JS
class Bang extends Weapon {
  constructor(name, id) {
    super(name, id);
    this.atack = 1;
  }

  buscarAlvos() {
    return super.buscarAlvoSiProprio();
  }

}

if (typeof module !== 'undefined') {
  module.exports = {
    Bang
  };
};