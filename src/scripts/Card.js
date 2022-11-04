//CARD.JS
class Card {
  constructor(name, classe, id) {
    this.name = name;
    this.classe = classe;
    this.id = id;
    if (name != "roles") {
      const li = document.createElement("li");
      li.id = this.id;
      li.classList.add("card-wrapper");
      const board = document.getElementById("deck").children[0];
      const row = `      
    <div class="card">
    <div class="back">
    <img src="./assets/bang/${name}/${classe}.png" />
    </div>
    <div class="front">
    <img src="./assets/bang/cards/_back.png" />
    </div>
    </div>
        `;
      li.innerHTML = row;
      board.appendChild(li);
      document
        .getElementById(this.id)
        .classList.add(this.classe, this.name, "hiddden");
    }
  
  
  }

  getId() {
    return this.id;
  }
}
