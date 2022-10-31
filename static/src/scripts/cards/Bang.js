//BANG.JS
class Bang extends CardAction {
  constructor(name, id) {
    super(name, id);
  }

  buscarAlvos() {
    return super.buscarAlvosProximos();
  }
}
