//CARDPLAYER.JS
class CardPlayer extends Card {
  constructor(name, hp, range, pseudoname, id) {
    super(name, "player", id);
    this.hp = hp;
    this.range = range;
    this.pseudoname = pseudoname;
  }
}
