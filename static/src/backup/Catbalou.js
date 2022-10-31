//CATBALOU.JS
class Catbalou extends Weapon {
  constructor(name, id) {
    super(name, id);
    this.atack = 2;
  }

  buscarAlvos() {
    return super.buscarAlvosProximos();
  }
}
