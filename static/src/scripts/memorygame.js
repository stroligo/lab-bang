// CLASSE

class Table {
  constructor(name) {
    this.name = name;
    const jogadores = [
      document.getElementById("player1").innerHTML = document.getElementById("inputName1").value,
      document.getElementById("player2").innerHTML = document.getElementById("inputName2").value,
      document.getElementById("player3").innerHTML = document.getElementById("inputName3").value,
      document.getElementById("player4").innerHTML = document.getElementById("inputName4").value
    ]
    renderDeck(jogadores)
    const carta1 = new Xerife2('xerife', 5, 1, jogadores[0], 'carta1');
    //const carta2 = new renegado("renegado", 5 ,1 , jogadores[1]);
    //const carta3 = new foradalei("foradalei", 5 ,1 , jogadores[2]);
    //const carta4 = new foradalei("foradalei", 5 ,1 , 4, jogadores[3]);
    this.player = [carta1, carta1, carta1, carta1];
    const carta5 = new Bang2('bang', 'carta5');
    this.deck = [carta1, carta5, carta1, carta5];
  

  }

  renderDeck() {
    console.log("randomizar o deck ->> EMBARALHAR -> shufle");
    this.deck.sort(() => {
      return Math.random() - 0.5;
    });

    //capturar o board
    const board = document.getElementById("board");

    console.log(
      "iterar pela array do deck e criar as minhas cartas viradas para baixo"
    );
    this.deck.forEach((element) => {
      const imgBack = document.createElement("img"); // <img />
      imgBack.id = element.id;
      imgBack.src = element.verso
      imgBack.alt = "carta virada";
      imgBack.className = "show cardBack";
      board.appendChild(imgBack);
      document.getElementById(element.id).classList.add(element.classe)
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

  checkPair() {
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
        document.getElementById(i).classList.remove("selecionado");
    }, 1500);
  }

  checkStatus() {
    // checar o status do jogo
    console.log(
      "Checando se o jogador ainda tem pontos OU se ele venceu o jogo!!"
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
      alert(`${this.player} você venceu!!`);
    }
  }
}


class Card2 {
  constructor(name, classe, id, verso = `../../static/assets/img/fe.svg `) {
    this.name = name;
    this.classe = classe
    this.id = id
    this.verso = verso
    this.source = `../../static/assets/img/${name}.svg `
  
 }

  buscarAlvosProximos() {
    const spot = document.querySelector('.selecionado').id
    const proximo = spot % 4 + 1
    let anterior;
    spot == 1 ? anterior = 4 : anterior = spot - 1
    return ([anterior, proximo])
  }

  buscarAlvoSiProprio() {
    return document.querySelector('.selecionado').id
  }

  buscarAlvoTodos() {
    const spot = document.getElementsByClassName('player selecionado')[0].id
    return [...document.getElementsByClassName('player')].map(element => element.id).filter(element => element != spot)
  }

  selecionarAlvos([...array]) {
    for (let i of array) {
      document.getElementById(i).classList.add("alvos");
    }
  }

  atacar([array]) {
  }

}
class CardPlayer2 extends Card2 {
  constructor(name, hp, range, pseudoname, id) {
    super(name, 'player', id)
    this.hp = hp;
    this.range = range;
    this.pseudoname = pseudoname;
  }

}
class Xerife2 extends CardPlayer2 {
  constructor(name, hp, range, pseudoname, id) {
    super(name, hp, range, pseudoname, id)
  }
}


function renderDeck(array) {
  console.log("randomizar o deck ->> EMBARALHAR -> shufle");
  array.sort(() => {
    return Math.random() - 0.5;
  });
}



class CardAction2 extends Card2 {
  constructor(name, id) {
    super(name, 'action', id)
  }

  buscarAlvosProximos() {
    const spot = document.querySelector('.selecionado').id
    const proximo = spot % 4 + 1
    let anterior;
    spot == 1 ? anterior = 4 : anterior = spot - 1
    return ([anterior, proximo])
  }

  buscarAlvoSiProprio() {
    return document.querySelector('.selecionado').id
  }

  buscarAlvoTodos() {
    const spot = document.getElementsByClassName('player selecionado')[0].id
    return [...document.getElementsByClassName('player')].map(element => element.id).filter(element => element != spot)
  }

  selecionarAlvos([...array]) {
    for (let i of array) {
      document.getElementById(i).classList.add("alvos");
    }
  }

  atacar([array]) {
  }

}

class Bang2 extends CardAction2 {
  constructor(name, id) {
    super(name, id);
  }

  buscarAlvos() {
    return super.buscarAlvosProximos()
  }
}


// CLASSE
/*class deck {
  constructor(id, tipo, source, alt) {
    this.id = id;
    this.tipo = tipo;
    this.source = source;
    this.alt = alt;
  }
}*/








