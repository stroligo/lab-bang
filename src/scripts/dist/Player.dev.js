"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

//APLAYER.JS
var Player =
/*#__PURE__*/
function (_Card) {
  _inherits(Player, _Card);

  function Player(name, classe, id, rodada, pseudoname) {
    var _this;

    var hp = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 5;
    var range = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 1;
    var spot = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 1;
    var anterior = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 0;
    var proximo = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : 0;
    var compras = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : 0;
    var pos = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : 0;

    _classCallCheck(this, Player);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Player).call(this, name, classe, id));
    _this.rodada = rodada;
    _this.pseudoname = pseudoname;
    _this.hp = hp;
    _this.range = range;
    _this.spot = spot;
    _this.anterior = anterior;
    _this.proximo = proximo;
    _this.hand = [];
    _this.pos = pos;
    return _this;
  }

  _createClass(Player, [{
    key: "setAnteriorProximo",
    value: function setAnteriorProximo() {
      var totalPlayers = document.getElementsByClassName("player").length;
      this.proximo = this.spot % totalPlayers + 1;
      this.spot == 1 ? this.anterior = totalPlayers : this.anterior = this.spot - 1;
    }
  }, {
    key: "setSpot",
    value: function setSpot(value) {
      this.spot = value;
    }
  }, {
    key: "getSpot",
    value: function getSpot() {
      return this.spot;
    }
  }, {
    key: "setHP",
    value: function setHP(value) {
      this.hp += value;
      var vida = document.querySelector(".turn .hp");

      if (value < 0) {
        vida.children[0].remove();
        document.getElementById("console").value += "Voce foi atingido\n";
      }

      if (value > 0) {
        var node = vida.children[0];
        var clone = node.cloneNode(true);
        vida.appendChild(clone);
        document.getElementById("console").value += "Voce ganhou vida\n";
      }
    }
  }, {
    key: "ComprarCartas",
    value: function ComprarCartas(carta, tipo) {
      var copia = carta;
      this.hand.push(carta);
      console.log("".concat(this.pseudoname, " comprou uma carta"));
      console.log("id da classe player" + this.id);
      console.log("name" + this.name);
      console.log("classe" + this.classe);

      if (tipo == 2) {
        //role
        //document.getElementsByClassName(this.id)[0].children[0].appendChild(document.createElement("lia"))
        document.getElementById(this.id).children[0].lastElementChild.appendChild(document.getElementById(copia.id).cloneNode(true)).classList.remove("hidden");
        document.getElementById(copia.id).remove();
      }

      if (tipo == 0) {
        // document.getElementById(carta.id).className = "apagar"
        //document.getElementsByClassName(this.id)[0].children[1].children[0].appendChild(document.createElement("li"))
        document.getElementById(this.id).children[1].lastElementChild.appendChild(document.getElementById(copia.id).cloneNode(true)).classList.remove("hidden"); //document.getElementsByClassName("apagar")[0].remove();

        document.getElementById(copia.id).remove();
      }

      if (tipo == 3) {
        // document.getElementById(carta.id).className = "apagar"
        //document.getElementsByClassName(this.id)[0].children[1].children[0].appendChild(document.createElement("li"))
        document.getElementById(this.id).children[1].lastElementChild.appendChild(document.getElementById(copia.id).cloneNode(true)).classList.remove("hidden"); //document.getElementsByClassName("apagar")[0].remove();

        document.getElementById(copia.id).remove();
      }
    }
  }]);

  return Player;
}(Card);