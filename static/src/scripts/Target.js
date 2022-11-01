//TARGET.JS
//recebe posicao,  analisar o range, ver posicao do alvos, usa carta
//buscar na mesa
// @ts-check
 function buscarAlvosProximos() {
    // @ts-ignore
    const spot = (document.querySelector(".selecionado").id)*1;
    const proximo = (spot % 4) + 1;
    let anterior;
    spot == 1 ? (anterior = 4) : (anterior = spot - 1);
    return [anterior, proximo];
  }

  // @ts-ignore
  function buscarAlvoSiProprio() {
    // @ts-ignore
    return (document.querySelector(".selecionado").id)*1;
  }

  function buscarAlvoTodos() {
    const spot = document.getElementsByClassName("player selecionado")[0].id;
    return [...document.getElementsByClassName("player")]
      .map((element) => element.id)
      .filter((element) => element != spot);
  }

  function selecionarAlvos([...array]) {
    for (let i of array) {
      // @ts-ignore
      document.getElementById(i).classList.add("alvos");
    }
  }  


