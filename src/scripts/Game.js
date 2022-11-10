// CLASSE
// HEAD

class Game {
  constructor(name) {
    this.name = name;

    const jogadores = [
      document.getElementById("inputName1").value,
      document.getElementById("inputName2").value,
      //document.getElementById("inputName3").value,
      //document.getElementById("inputName4").value,
    ];

    //this.renderDeck();

    this.cemytery = []; //toda carta usada vai para o cemiterio
    //(name, pseudoname, id)

    //const player1 = new Outlaw("roles", "sheriff", "player3", jogadores[0]);
    //const player2 = new Renegade("roles", "renegade", "player2", jogadores[1]);
    const player1 = new Outlaw("roles", "outlaw", "player1", jogadores[0]);
    const player2 = new Outlaw("roles", "outlaw", "player2", jogadores[1]);

    this.role = [player1, player2];

    //renderDeck(this.roles);

    // this.role.forEach((element, index) => element.setSpot(index + 1)); //.setSpot())
    //this.role.forEach((element) => element.setAnteriorProximo());

    //Setando Xerife
    //const inicio = this.role[2].id
    //document.getElementById(inicio).classList.add("turn");
    this.deck = [];
    //this.deck = [player1, player2, player3, player4];

    for (let i = 1; i <= 100; i++) {
      let x = aleatorio()
      if (x <= 3) this.deck.push(new Bang("cards", "bang", i));
      if (x == 4) this.deck.push(new Missed("cards", "missed", i));
      if (x == 5) this.deck.push(new Beer("cards", "beer", i));
    }
    //for (let i = 0; i < 12; i++)
    //this.deck.push(new Bang("cards", "bang", i + 4));

    //for (let i = 0; i < 4; i++)
    //this.deck.push(new Missed("cards", "missed", i + 12));

    //for (let i = 0; i < 4; i++)
    //this.deck.push(new Beer("cards", "beer", i + 16));

    //for (let i = 0; i < 12; i++)
    //this.deck.push(new Bang("cards", "bang", i + 4));

    //for (let i = 0; i < 4; i++)
    //this.deck.push(new Missed("cards", "missed", i + 12));

    //for (let i = 0; i < 4; i++)
    //this.deck.push(new Beer("cards", "beer", i + 16));

    //compra inicial de cartas

    //document.querySelectorAll(".player")[0].classList.add("turn") //setando active para todos
    //document.querySelectorAll(".player")[1].classList.add("turn") //setando active para todos
    document.querySelectorAll(".player")[0].classList.add("turn"); //setando active para todos
    //document.querySelectorAll(".player")[3].classList.add("turn") //setando active para todos

    //this.role.forEach((element, index) => {

    for (let i = 0; i < 10; i++) {
      const atual = document.querySelector(".turn");
      if (document.querySelector(".turn").nextElementSibling == null) ply1.classList.add("turn")
      else document.querySelector(".turn").nextElementSibling.classList.add("turn")
      atual.classList.remove("turn")

      // if (this.precisaComprar())
      const playerAtual = document.querySelector(".turn").id;
      const cartaExcluir = this.deck.shift();
      this.buscaObjeto(playerAtual).hand.push(cartaExcluir);
      const remover = document.querySelector("#deck ul li");
      const inserir = document.querySelector(`#${playerAtual} > div.hand > ul`);
      inserir.appendChild(remover).classList.remove("hidden");
    }
  }

  comprarDeck() {
    if (this.precisaComprar()) {

      const playerAtual = document.querySelector(".turn").id;
      const cartaExcluir = this.deck.shift();
      this.buscaObjeto(playerAtual).hand.push(cartaExcluir);
      const remover = document.querySelector("#deck ul li");
      const inserir = document.querySelector(`#${playerAtual} > div.hand > ul`);
      inserir.appendChild(remover).classList.remove("hidden");
    }
  }

  renderDeck() {
    console.log("randomizar o deck ->> EMBARALHAR -> shufle");
    this.deck.sort(() => {
      return Math.random() - 0.5;
    });
  }

  buscaObjeto(id) {
    let objeto;
    if (id == "player1") return this.role[0];
    if (id == "player2") return this.role[1];
    if (id == "player3") return this.role[2];
    if (id == "player4") return this.role[3];
    if (id == "player5") return this.role[4];
    if (id == "player6") return this.role[5];
    if (id == "player7") return this.role[6];
  }

  precisaComprar() {
    const playerAtual = document.querySelector(".turn").id;
    var textArea = document.getElementById("console");
    textArea.scrollTop = textArea.scrollHeight;
    if (this.buscaObjeto(playerAtual).getHP() <= this.buscaObjeto(playerAtual).hand.length) {
      document.getElementById("console").value += "Você só pode comprar carta até a quantidade de vidas\n";
     return false;
    }
    return true;
  }



  beer(event) {
    //if (!this.precisaComprar())
    const atual = document.querySelector(".turn").id
    this.buscaObjeto(atual).setHP(+1);
    const carta = (event.currentTarget);
    carta.remove();
    this.buscaObjeto(atual).hand = this.buscaObjeto(atual).hand.filter(element => element.id != carta.id)
    console.log(carta.id)





  }

  bang(event) {
    // if (!this.precisaComprar()) {
    //proxTurno.disabled = true;

    const atual = document.querySelector(".turn").id
    const carta = (event.currentTarget);
    carta.remove();
    this.buscaObjeto(atual).hand = this.buscaObjeto(atual).hand.filter(element => element.id != carta.id)


    if (atual === "player1")
      document.getElementById("player2").classList.add("target");
    if (atual === "player2")
      document.getElementById("player1").classList.add("target");

    // document
    // .querySelectorAll(`#player${atual.proximo}`)
    //.forEach((element) => element.classList.add("target"));

    document.getElementById("console").value += "Alvo selecionado\n";
    //proxTurno.disabled = false

    this.alvosAction();


    //const alvos = document.querySelectorAll(".target");
    //alvos.forEach((alvos) =>
    // alvos.addEventListener("click", (event) => this.alvosAction(event))
    //);
    // }
  }

  trocaTurno() {

    const atual = document.querySelector(".turn").id;
    if (atual === "player1") {
      player1.classList.remove("turn");
      player2.classList.add("turn");

    }

    if (atual === "player2") {
      player2.classList.remove("turn");
      player1.classList.add("turn");
    }

    //document.querySelector(".turn").nextElementSibling == null) ply1.classList.add("turn")
    //else document.querySelector(".turn").nextElementSibling.classList.add("turn")
  }

  alvosAction() {
    document.getElementById("console").value += "Tiro disparado\n";
    //console.log(event.currentTarget)
    const alvo = document.querySelector(".target");
    const atual = alvo.id;

    //const id = event.currentTarget["id"];

    if (this.buscaObjeto(atual).hand.filter(element => element.classe == "missed")[0] !== undefined) {
      document.getElementById("console").value += "Voce escapou por pouco\n";
      document.getElementById("console").value += "Carta missed descartada";
      const cartaId = this.buscaObjeto(atual).hand.filter(element => element.classe == "missed")[0].id;
      document.getElementById(cartaId).remove()
      this.buscaObjeto(atual).hand = this.buscaObjeto(atual).hand.filter(element => element.id != cartaId)
      console.log(this.role[1])


    }
    else {
      if (atual === "player2") {
        //document.querySelector("#player2 .hp li").remove();
        this.role[1].setHP(-1)

      } else
        if (atual === "player1") {
          //document.querySelector("#player1 .hp li").remove();
          this.role[0].setHP(-1)
        }
      if (this.role[0].getHP() === 0) {
        alert(this.role[1].getPseudoname() + "Ganhou")
        alert(this.role[0].getPseudoname() + "Perdeu")
        document.getElementById("player1").remove()
      }

     
      }
      player1.classList.remove("target");
      player2.classList.remove("target");

      if (this.role[1].getHP() === 0) {
        alert(this.role[0].getPseudoname() + " Ganhou")
        alert(this.role[1].getPseudoname() + " Perdeu")
        document.getElementById("player2").remove()

    }

    //document.querySelector(".target").removeEventListener("click", (event) => this.trocaTurno(event))
    //alvos.forEach((alvos) =>
    //alvos.removeEventListener("click", (event) => this.trocaTurno(event))
    //);
    //if (player1.classList.contains("turn")) player1.removeEventListener("click", this.trocaTurno());
    //if (player2.classList.contains("turn")) player2.removeEventListener("click", this.trocaTurno());


   
    //this.trocaTurno();


  }

  //nessa etapa iremos configurar os turnos de cada jogador
  //ncompra carta; usa carta; uso bang; descartas cartas acima[cemytery]; fim de turno;

}


function aleatorio() {
  return Math.floor(Math.random() * 5 + 1);
}

function renderDeck(array) {
  console.log("randomizar o deck ->> EMBARALHAR -> shufle");
  array.sort(() => {
    return Math.random() - 0.5;
  });
}

function onMouseenterOrMouseleaveCard(e) {
  var _$this = $(this);

  if (windowWidth < 1000 || _$this.hasClass("reverse-clicked")) {
    return;
  }

  if (e.type === "mouseenter") {
    _$this.addClass("reverse");

    return;
  }

  _$this.removeClass("reverse");
}
