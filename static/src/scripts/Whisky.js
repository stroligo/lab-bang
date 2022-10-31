class Whisky extends CardAction {
  constructor(name, id) {
    super(name, id);
  }

  buscarAlvos() {
    return super.buscarAlvoSiProprio()
  }

}