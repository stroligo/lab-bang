//APLAYER.JS
// @ts-check
class Player extends Card {
  constructor(name, pseudoname, id, hp = 5, range = 1) {
    super(name, "roles", id);
    this.range = range;
    this.pseudoname = pseudoname;
    this.hp = hp;
    this.rand = [];
  }

  setHP(value) {
    this.hp = this.hp;
  }
}
