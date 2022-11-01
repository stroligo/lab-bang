//APLAYER.JS
class APlayer extends ACard {
  constructor(name, pseudoname, id, hp = 5, range = 1) {
    super(name, "player", id);
    this.range = range;
    this.pseudoname = pseudoname;
    this.hp = hp;
    this.rand = [];
  }

  setHP(value) {
    this.hp = this.hp + sd;
  }
}
