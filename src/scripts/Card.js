//ACARD.JS
class Card {
  constructor(name, classe, id, ataque, defesa, vida) {
    this.name = name;
    this.classe = classe;
    this.id = id;
    this.ataque = ataque;
    this.defesa = defesa;
    this.vida = vida;

    const li = document.createElement('li'); 
    li.id = this.id;
    li.classList.add("card-wrapper");
    const board = document.getElementById("deck");
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
    document.getElementById(this.id).classList.add(this.classe,this.name , "hidden");
  }

  getId() {
    return this.id;
  }

  

  selecionarAlvos([...array]) {
    for (let i of array) {
      // @ts-ignore
      document.getElementById(i).classList.add("alvos");
    }
  }


}
