// CLASSE
// HEAD

class Game {
  constructor(name) {
    this.name = name;

    const jogadores = [
      document.getElementById("inputName1").value,
      document.getElementById("inputName2").value,
      document.getElementById("inputName3").value,
      document.getElementById("inputName4").value,
    ];

    //this.renderDeck();

    this.cemytery = []; //toda carta usada vai para o cemiterio
    //(name, pseudoname, id)

    const player1 = new Outlaw("roles", "sheriff", "player3", jogadores[0]);
    const player2 = new Renegade("roles", "renegade", "player2", jogadores[1]);
    const player3 = new Sheriff("roles", "outlaw", "player1", jogadores[2]);
    const player4 = new Outlaw("roles", "outlaw", "player4", jogadores[3]);

    this.role = [player1, player2, player3, player4];

    //renderDeck(this.roles);

    this.role.forEach((element, index) => element.setSpot(index + 1)); //.setSpot())
    this.role.forEach((element) => element.setAnteriorProximo());

    //Setando Xerife
    //const inicio = this.role[2].id
    //document.getElementById(inicio).classList.add("turn");
    this.deck = [];
    this.deck = [player1, player2, player3, player4];

    for (let i = 0; i < 4; i++)
      this.deck.push(new Bang("cards", "bang", i + 4));

    for (let i = 0; i < 1; i++)
      this.deck.push(new Missed("cards", "missed", i + 44));

    for (let i = 0; i < 1; i++)
      this.deck.push(new Beer("cards", "beer", i + 54));

    //compra inicial de cartas

    //document.querySelectorAll(".player")[0].classList.add("turn") //setando active para todos
    //document.querySelectorAll(".player")[1].classList.add("turn") //setando active para todos
    document.querySelectorAll(".player")[0].classList.add("turn"); //setando active para todos
    //document.querySelectorAll(".player")[3].classList.add("turn") //setando active para todos

    //this.role.forEach((element, index) => {
    for (let i = 0; i < 7; i++) {
      this.comprarDeck();
    }

    //);
  }

  renderDeck() {
    console.log("randomizar o deck ->> EMBARALHAR -> shufle");
    this.deck.sort(() => {
      return Math.random() - 0.5;
    });
  }

  partida() {
    //const idCarta = event.currentTarget["id"];
    console.log(idCarta);
    if (
      document.getElementById(idCarta).classList.contains("turn", "selecionado")
    ) {
      console.log("Carta já foi selecionada");
    } else {
      document.getElementById(idCarta).src = this.deck.find(
        (element) => element.id == idCarta
      ).source;
      document.getElementById(idCarta).alt = this.deck.find(
        (element) => element.id == idCarta
      ).alt;
      document
        .getElementById(idCarta)
        .classList.add("selecionado", "cardFront");
      document.getElementById(idCarta).classList.remove("cardBack");
      if (document.querySelectorAll(".selecionado").length === 2) {
        //if (this.deck.filter(element => element.selecionado).length === 2)
        console.log("Duas cartas foram viradas. Vamos compara-las");
        this.checkPair();
      }
    }
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

  precisaComprar(event) {
    var textArea = document.getElementById("console");
    textArea.scrollTop = textArea.scrollHeight;

    if (document.getElementsByClassName("turn").deck) {
      document.getElementById("console").value += "Compre uma carta\n";
      return true;
    }
    return false;
  }

  comprarDeck() {
    if (this.precisaComprar()) {
      const playerAtual = document.querySelector(".turn").id;
      const cartaExcluir = this.deck.shift();
      this.buscaObjeto(playerAtual).hand.push(cartaExcluir);
      const remover = document.querySelector("#deck ul li");
      const inserir = document.querySelector(`#${playerAtual} > div.hand > ul`);
      inserir.appendChild(remover);
    }
  }

  beer(event) {
    if (!this.precisaComprar())
      this.buscaObjeto(document.getElementsByClassName("turn")[0].id).setHP(+1);
  }

  bang(event) {
    if (!this.precisaComprar()) {
      const atual = this.buscaObjeto(document.querySelector(".turn").id);
      document
        .querySelectorAll(`#player${atual.anterior},#player${atual.proximo}`)
        .forEach((element) => element.classList.add("target"));

      document.getElementById("console").value += "Selecione um alvo\n";
      const alvos = document.querySelectorAll(".target");
      alvos.forEach((alvos) =>
        alvos.addEventListener("click", (event) => this.alvosAction(event))
      );
    }
  }

  alvosAction(event) {
    const id = event.currentTarget["id"];
    if (document.querySelector(`#${id} .missed`))
      document.getElementById("console").value += "Voce escapou por pouco\n";
    else {
      buscaObjeto(id).setHP(-1);
      document.getElementById("console").value += "Voce foi baleado\n";
    }
    document.querySelector(".target").classList.remove("target");
    document.querySelector(".target").classList.remove("target");
  }

  //nessa etapa iremos configurar os turnos de cada jogador
  //ncompra carta; usa carta; uso bang; descartas cartas acima[cemytery]; fim de turno;
  turn(event) {
    //const game1 = new Game("game");

    const playerAtual = document.getElementsByClassName("turn")[2].id;
    let objeto;

    //console.log("comprando");
    //objeto.ComprarCartas(this.deck.shift(), 0)
    //objeto.ComprarCartas(this.deck.shift(), 0)
  }
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
