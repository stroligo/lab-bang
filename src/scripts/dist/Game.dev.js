"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// CLASSE
// HEAD
var Game =
/*#__PURE__*/
function () {
  function Game(name) {
    _classCallCheck(this, Game);

    this.name = name;
    var jogadores = [document.getElementById("inputName1").value, document.getElementById("inputName2").value, document.getElementById("inputName3").value, document.getElementById("inputName4").value]; //this.renderDeck();

    this.cemytery = []; //toda carta usada vai para o cemiterio
    //(name, pseudoname, id)

    var player1 = new Outlaw("roles", "sheriff", "player3", jogadores[0]);
    var player2 = new Renegade("roles", "renegade", "player2", jogadores[1]);
    var player3 = new Sheriff("roles", "outlaw", "player1", jogadores[2]);
    var player4 = new Outlaw("roles", "outlaw", "player4", jogadores[3]);
    this.role = [player1, player2, player3, player4]; //renderDeck(this.roles);

    this.role.forEach(function (element, index) {
      return element.setSpot(index + 1);
    }); //.setSpot())

    this.role.forEach(function (element) {
      return element.setAnteriorProximo();
    }); //Setando Xerife
    //const inicio = this.role[2].id
    //document.getElementById(inicio).classList.add("turn");

    this.deck = [];
    this.deck = [player1, player2, player3, player4];

    for (var i = 0; i < 40; i++) {
      this.deck.push(new Bang("cards", "bang", i + 4));
    }

    for (var _i = 0; _i < 10; _i++) {
      this.deck.push(new Missed("cards", "missed", _i + 44));
    }

    for (var _i2 = 0; _i2 < 10; _i2++) {
      this.deck.push(new Beer("cards", "beer", _i2 + 54));
    } //compra inicial de cartas
    //document.querySelectorAll(".player")[0].classList.add("turn") //setando active para todos
    //document.querySelectorAll(".player")[1].classList.add("turn") //setando active para todos


    document.querySelectorAll(".player")[0].classList.add("turn"); //setando active para todos
    //document.querySelectorAll(".player")[3].classList.add("turn") //setando active para todos
    //this.role.forEach((element, index) => {

    for (var _i3 = 0; _i3 < 20; _i3++) {
      this.comprarDeck();
    } //);

  }

  _createClass(Game, [{
    key: "renderDeck",
    value: function renderDeck() {
      console.log("randomizar o deck ->> EMBARALHAR -> shufle");
      this.deck.sort(function () {
        return Math.random() - 0.5;
      });
    }
  }, {
    key: "partida",
    value: function partida() {
      //const idCarta = event.currentTarget["id"];
      console.log(idCarta);

      if (document.getElementById(idCarta).classList.contains("turn", "selecionado")) {
        console.log("Carta já foi selecionada");
      } else {
        document.getElementById(idCarta).src = this.deck.find(function (element) {
          return element.id == idCarta;
        }).source;
        document.getElementById(idCarta).alt = this.deck.find(function (element) {
          return element.id == idCarta;
        }).alt;
        document.getElementById(idCarta).classList.add("selecionado", "cardFront");
        document.getElementById(idCarta).classList.remove("cardBack");

        if (document.querySelectorAll(".selecionado").length === 2) {
          //if (this.deck.filter(element => element.selecionado).length === 2)
          console.log("Duas cartas foram viradas. Vamos compara-las");
          this.checkPair();
        }
      }
    }
  }, {
    key: "buscaObjeto",
    value: function buscaObjeto(id) {
      var objeto;
      if (id == "player1") return this.role[0];
      if (id == "player2") return this.role[1];
      if (id == "player3") return this.role[2];
      if (id == "player4") return this.role[3];
      if (id == "player5") return this.role[4];
      if (id == "player6") return this.role[5];
      if (id == "player7") return this.role[6];
    }
  }, {
    key: "precisaComprar",
    value: function precisaComprar(event) {
      var textArea = document.getElementById("console");
      textArea.scrollTop = textArea.scrollHeight;

      if (document.getElementsByClassName("turn").deck) {
        document.getElementById("console").value += "Compre uma carta\n";
        return true;
      }

      return false;
    }
  }, {
    key: "comprarDeck",
    value: function comprarDeck() {
      if (this.precisaComprar()) {
        var playerAtual = document.querySelector(".turn").id;
        var cartaExcluir = this.deck.shift();
        this.buscaObjeto(playerAtual).hand.push(cartaExcluir);
        var remover = document.querySelector("#deck ul li");
        var inserir = document.querySelector("#".concat(playerAtual, " > div.hand > ul"));
        inserir.appendChild(remover);
      }
    }
  }, {
    key: "beer",
    value: function beer(event) {
      if (!this.precisaComprar()) this.buscaObjeto(document.getElementsByClassName("turn")[0].id).setHP(+1);
    }
  }, {
    key: "bang",
    value: function bang(event) {
      var _this = this;

      if (!this.precisaComprar()) {
        var atual = this.buscaObjeto(document.querySelector(".turn").id);
        document.querySelectorAll("#player".concat(atual.anterior, ",#player").concat(atual.proximo)).forEach(function (element) {
          return element.classList.add("target");
        });
        document.getElementById("console").value += "Selecione um alvo\n";
        var alvos = document.querySelectorAll(".target");
        alvos.forEach(function (alvos) {
          return alvos.addEventListener("click", function (event) {
            return _this.alvosAction(event);
          });
        });
      }
    }
  }, {
    key: "alvosAction",
    value: function alvosAction(event) {
      var id = event.currentTarget["id"];
      if (document.querySelector("#".concat(id, " .missed"))) document.getElementById("console").value += "Voce escapou por pouco\n";else {
        buscaObjeto(id).setHP(-1);
        document.getElementById("console").value += "Voce foi baleado\n";
      }
      document.querySelector(".target").classList.remove("target");
      document.querySelector(".target").classList.remove("target");
    } //nessa etapa iremos configurar os turnos de cada jogador
    //ncompra carta; usa carta; uso bang; descartas cartas acima[cemytery]; fim de turno;

  }, {
    key: "turn",
    value: function turn(event) {
      //const game1 = new Game("game");
      var playerAtual = document.getElementsByClassName("turn")[2].id;
      var objeto; //console.log("comprando");
      //objeto.ComprarCartas(this.deck.shift(), 0)
      //objeto.ComprarCartas(this.deck.shift(), 0)
    }
  }]);

  return Game;
}();

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