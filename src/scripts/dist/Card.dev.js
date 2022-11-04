"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//CARD.JS
var Card =
/*#__PURE__*/
function () {
  function Card(name, classe, id) {
    _classCallCheck(this, Card);

    this.name = name;
    this.classe = classe;
    this.id = id;

    if (name != "roles") {
      var li = document.createElement("li");
      li.id = this.id;
      li.classList.add("card-wrapper");
      var board = document.getElementById("deck").children[0];
      var row = "      \n    <div class=\"card\">\n    <div class=\"back\">\n    <img src=\"./assets/bang/".concat(name, "/").concat(classe, ".png\" />\n    </div>\n    <div class=\"front\">\n    <img src=\"./assets/bang/cards/_back.png\" />\n    </div>\n    </div>\n        ");
      li.innerHTML = row;
      board.appendChild(li);
      document.getElementById(this.id).classList.add(this.classe, this.name, "hidden");
    }
  }

  _createClass(Card, [{
    key: "getId",
    value: function getId() {
      return this.id;
    }
  }]);

  return Card;
}();