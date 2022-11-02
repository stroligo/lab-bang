//TARGET.JS
//recebe posicao,  analisar o range, ver posicao do alvos, usa carta
//buscar na mesa
// @ts-check
function buscarAlvosProximos(spot) {
    // @ts-ignore
    //const spot = (document.querySelector(".selecionado").id)*1;
    const total = document.getElementsByClassName("player").length;
    const proximo = (spot % 4) + 1;
    let anterior;
    spot == 1 ? (anterior = total) : (anterior = spot - 1);
    const anterior2 = document.getElementById("players").children[anterior-1].children[0];
    const proximo2 = document.getElementById("players").children[proximo-1].children[0];
    return [anterior2, proximo2];
  }

  // @ts-ignore
  function buscarAlvoSiProprio(spot) {
    // @ts-ignore
    return (spot)
  }

  //function buscarAlvoTodos(spot) {
   // const spot = document.getElementsByClassName("player selecionado")[0].id;
   // return [...document.getElementsByClassName("player")]
     // .map((element) => element.id)
      //.filter((element) => element != spot);
  //}

  function selecionarAlvos(pos) {
    
    
    //marcar anterior e proximo
    pos[0].childNodes.forEach((element, index) => {
      if (index != 0)  //primeiro elemento é text, depois começa os li
      pos[0].children[index - 1].classList.add("target turn")
    });

    pos[1].childNodes.forEach((element, index) => {
      if (index != 0)  //primeiro elemento é text, depois começa os li
      pos[1].children[index - 1].classList.add("target turn")
    });
  }
    
    

