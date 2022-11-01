//GATINS.JS
class Gatling extends Card {
  constructor(name, classe, id) {
    super(name, 'cards', id);
    this.atack = 1;
  }

  buscarAlvos() {
    return super.buscarAlvoTodos();
  }
}
