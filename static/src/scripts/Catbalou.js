class Catbalou extends CardAction {
  constructor(name, id) {
    super(name, id);
  }

  buscarAlvos() {
    return super.buscarAlvosProximos()
  }

}