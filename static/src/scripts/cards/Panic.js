//PANIC.JS
class Panic extends CardAction {
  constructor(name, id) {
    super(name, id);
  }

  buscarAlvos() {
    return super.buscarAlvosProximos();
  }
}
