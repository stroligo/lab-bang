// CLASSE
// HEAD
// @ts-check
class Game {
  constructor(name) {
    this.name = name;
    
    const jogadores = [
      // @ts-ignore
      (document.getElementById("player1").innerHTML =
        // @ts-ignore
        document.getElementById("inputName1").value),
      (document.getElementById("player2").innerHTML =
        // @ts-ignore
        document.getElementById("inputName2").value),
      // @ts-ignore
      (document.getElementById("player3").innerHTML =
        document.getElementById("inputName3").value),
      // @ts-ignore
      (document.getElementById("player4").innerHTML =
        document.getElementById("inputName4").value)
    ];
    
    renderDeck(jogadores);
    
    this.cemytery = []; //toda carta usada vai para o cemiterio
    //(name, pseudoname, id)
    
    const player1 = new Sheriff("sheriff", jogadores[0], "1");
    const player2 = new Renegade("renegade", jogadores[1], "2");
    const player3 = new Outlaw("outlaw", jogadores[2], "3");
    const player4 = new Outlaw("outlaw", jogadores[3], "4");
    this.roles = [player1, player2, player3, player4];
    renderDeck(this.roles);

    this.deck=[];
   
    for (let i=5; i <=30; i++) {
      this.deck.push(new Bang("bang", i));
      this.deck.push(new Beer("beer", i+1));
      this.deck.push(new Missed("missed", i+2));
        }
        console.log(this.deck);
  }
 
  renderDeck() {
    console.log("randomizar o deck ->> EMBARALHAR -> shufle");
    this.deck.sort(() => {
      return Math.random() - 0.5;
    });
     }

  flipCard(event) {
    const idCarta = event.currentTarget["id"];
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
  //nessa etapa iremos configurar os turnos de cada jogador
  //ncompra carta; usa carta; uso bang; descartas cartas acima[cemytery]; fim de turno;
  turn() {
    //const carta1 = this.deck.find(element => element.selecionado);
    //const carta2 = this.deck.findLast(element => element.selecionado);
    let cartasId = [...document.querySelectorAll(".selecionado")].map(
      (element) => element.id
    );
    const idCarta1 = cartasId[0];
    const idCarta2 = cartasId[1];

    if (
      this.deck.find((element) => element.id == idCarta1).tipo ===
      this.deck.findLast((element) => element.id == idCarta2).tipo
    ) {
      console.log("Cartas são iguais!!");
      // criar um indicador de que as cartas já foram viradas
      for (let i of cartasId) document.getElementById(i).classList.add("turn");

      // checar o status do jogo
      this.checkStatus();
    } else {
      console.log("Cartas são diferentes!");
      // remover ponto do jogador
      //this.points--;
      //points.innerText = this.points;
      // desvirar as duas cartas
      setTimeout(() => {
        console.log("Fechando as cartas selecionadas");

        for (let i of cartasId) {
          document
            .getElementById(i)
            .classList.remove("selecionado", "cardFront");

          //alterando o fundo para carta de verso
          document.getElementById(i).src = this.verso;
          //alterando o alt para carta de verso
          document.getElementById(i).alt = "carta virada";

          document.getElementById(i).classList.add("cardBack");
        }
        //checar o status do jogo
        this.checkStatus();
      }, 1500);
    }
    // setar todas cartas como não selecionadas
    //this.deck.forEach(element, index => element.selecionado = false)
    setTimeout((event) => {
      for (let i of cartasId)
        // @ts-ignore
        document.getElementById(i).classList.remove("selecionado");
    }, 1500);
  }
  //chacar jogadores se alguem morreu, se alguem morreu e definir vencedodr
  checkStatus() {
    // checar o status do jogo
    console.log(
      "checando se o jogador ainda tem pontos OU se ele venceu o jogo!!"
    );
    console.log(this.points);
    // se o jogador ainda tem pontos -> perdeu
    if (this.points === 0) {
      console.log("Você perdeu por pontos");
      alert(`${this.player}, você não tem mais pontos! Tente novamente`);

      const board = document.querySelector("#board");
      board.classList.add("hide");
    }

    // ainda existem cartas para serem viradas -> ganhou
    const cardsTurn = document.querySelectorAll(".turn");
    if (cardsTurn.length === this.deck.length) {
      console.log("Venceu!!");
  //    alert(`${this.player} você venceu!!`);
    }
  }
}
/*
    class Card2 {
      constructor(name, classe, id, verso = `../../static/assets/img/fe.svg `) {
        this.name = name;
        this.classe = classe;
        this.id = id;
        this.verso = verso;
        this.source = `../../static/assets/img/${name}.svg `;
      }

      buscarAlvosProximos() {
        const spot = document.querySelector(".selecionado").id;
        const proximo = (spot % 4) + 1;
        let anterior;
        spot == 1 ? (anterior = 4) : (anterior = spot - 1);
        return [anterior, proximo];
      }

      buscarAlvoSiProprio() {
        return document.querySelector(".selecionado").id;
      }

      buscarAlvoTodos() {
        const spot =
          document.getElementsByClassName("player selecionado")[0].id;
        return [...document.getElementsByClassName("player")]
          .map((element) => element.id)
          .filter((element) => element != spot);
      }

      selecionarAlvos([...array]) {
        for (let i of array) {
          document.getElementById(i).classList.add("alvos");
        }
      }

      atacar([array]) {}
    }
    class CardPlayer2 extends Card2 {
      constructor(name, hp, range, pseudoname, id) {
        super(name, "player", id);
        this.hp = hp;
        this.range = range;
        this.pseudoname = pseudoname;
      }
    }
    class Xerife2 extends CardPlayer2 {
      constructor(name, hp, range, pseudoname, id) {
        super(name, hp, range, pseudoname, id);
      }
    }

  class CardAction2 extends Card2 {
      constructor(name, id) {
        super(name, "action", id);
      }

      buscarAlvosProximos() {
        const spot = document.querySelector(".selecionado").id;
        const proximo = (spot % 4) + 1;
        let anterior;
        spot == 1 ? (anterior = 4) : (anterior = spot - 1);
        return [anterior, proximo];
      }

      buscarAlvoSiProprio() {
        return document.querySelector(".selecionado").id;
      }

      buscarAlvoTodos() {
        const spot =
          document.getElementsByClassName("player selecionado")[0].id;
        return [...document.getElementsByClassName("player")]
          .map((element) => element.id)
          .filter((element) => element != spot);
      }

      selecionarAlvos([...array]) {
        for (let i of array) {
          document.getElementById(i).classList.add("alvos");
        }
      }

      atacar([array]) {}
    }

    class Bang2 extends CardAction2 {
      constructor(name, id) {
        super(name, id);
      }

      buscarAlvos() {
        return super.buscarAlvosProximos();
      }
    }
  */

function renderDeck(array) {
  console.log("randomizar o deck ->> EMBARALHAR -> shufle");
  array.sort(() => {
    return Math.random() - 0.5;
  });
}
