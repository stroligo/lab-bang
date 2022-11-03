// CLASSE
// HEAD

class Game {

  constructor(name) {
    this.name = name;

    const jogadores = [
      document.getElementById("inputName1").value,
      document.getElementById("inputName2").value,
      document.getElementById("inputName3").value,
      document.getElementById("inputName4").value
    ];

    //this.renderDeck();

    this.cemytery = []; //toda carta usada vai para o cemiterio
    //(name, pseudoname, id)

    const numero1 = new Sheriff("roles", "outlaw", "player1", jogadores[0]);
    const numero2 = new Renegade("roles", "renegade", "player2", jogadores[1]);
    const numero3 = new Outlaw("roles", "sheriff", "player3", jogadores[2]);
    const numero4 = new Outlaw("roles", "outlaw", "player4", jogadores[3]);

    this.role = [numero1, numero2, numero3, numero4];
    //renderDeck(this.roles);

    this.deck = [];

    this.role.forEach((element, index) => element.setSpot(index + 1)); //.setSpot())
    this.role.forEach(element => element.setAnteriorProximo());

    this.deck = [numero1, numero2, numero3, numero4];

    this.deck.forEach((element, index) => element.setSpot(index + 1))//.setSpot())

    this.role = [numero1, numero2, numero3, numero4];

    this.role.forEach(element => {
      element.ComprarCartas(this.deck.shift(), 2)
    });

    this.deck = []

    for (let i = 5; i <= 30; i = i + 3) {
      this.deck.push(new Bang("cards", "bang", i));
      this.deck.push(new Beer("cards", "beer", i + 1));
      this.deck.push(new Missed("cards", "missed", i + 2));
    }

    this.renderDeck(this.deck);    //compra inicial de cartas


    this.role.forEach(element => {
      //element.ComprarCartas(this.roles.shift(),0)
      for (let i = 0; i < element.hp; i++)
        element.ComprarCartas(this.deck.shift(), 0)
    });

    document.getElementById("console").value += "Cartas Foram distribuidas\n"
    //iniciando a partida
    const inicio = this.role[2].id
    console.log(this.role[1].id);
    console.log(this.role[1]);
    document.getElementById(inicio).classList.add("turn");


  }

  renderDeck(values) {
    console.log("randomizar o deck ->> EMBARALHAR -> shufle")
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
    if (id == "player1") return this.role[1]
    if (id == "player2") return this.role[1]
    if (id == "player3") return this.role[2]
    if (id == "player4") return this.role[3]
    if (id == "player5") return this.role[4]
    if (id == "player6") return this.role[5]
    if (id == "player7") return this.role[6]
  }

  precisaComprar(event) {

    if (document.getElementsByClassName("active").deck) {
      document.getElementById("console").value += "Você precisa comprar\n";
      return true;
    }
    return false;
  }
  beer(event) {
    if (!this.precisaComprar()) this.buscaObjeto(document.getElementsByClassName("turn")[0].id).setHP(+1);

  }


  bang(event) {
    if (!this.precisaComprar()) {

      const atual = this.buscaObjeto(document.querySelector(".turn").id)
      document.querySelectorAll(`#player${atual.anterior},#player${atual.proximo}`).
        forEach((element => element.classList.add("target")))

      document.getElementById("console").value += "Selecione um alvo\n"
      const alvos = document.querySelectorAll(".target");
      alvos.forEach(alvos => alvos.addEventListener("click", event => this.alvosAction(event)));
    }

  }

  alvosAction(event) {
    const id = (event.currentTarget["id"])
    if (document.querySelector(`#${id} .missed`))
      document.getElementById("console").value += "Voce escapou por pouco\n";
    else {
      buscaObjeto(id).setHP(-1);
      document.getElementById("console").value += "Voce foi baleado\n"
    }
    document.querySelector(".target").classList.remove("target");
    document.querySelector(".target").classList.remove("target");


  }


  //nessa etapa iremos configurar os turnos de cada jogador
  //ncompra carta; usa carta; uso bang; descartas cartas acima[cemytery]; fim de turno;
  turn(event) {
    //const game1 = new Game("game");

    const playerAtual = document.getElementsByClassName("turn")[0].id;
    let objeto;

    if (playerAtual == "player1") objeto = this.role[0]
    if (playerAtual == "player2") objeto = this.role[1]
    if (playerAtual == "player3") objeto = this.role[2]
    if (playerAtual == "player4") objeto = this.role[3]
    if (playerAtual == "player5") objeto = this.role[4]
    if (playerAtual == "player6") objeto = this.role[5]
    if (playerAtual == "player7") objeto = this.role[6]

    //console.log("comprando");
    //objeto.ComprarCartas(this.deck.shift(), 0)
    //objeto.ComprarCartas(this.deck.shift(), 0)

  }

}



function onMouseenterOrMouseleaveCard(e) {
  var _$this = $(this);

  if (windowWidth < 1000 || _$this.hasClass('reverse-clicked')) {
    return;
  }

  if (e.type === 'mouseenter') {
    _$this.addClass('reverse');

    return;
  }

  _$this.removeClass('reverse');
}