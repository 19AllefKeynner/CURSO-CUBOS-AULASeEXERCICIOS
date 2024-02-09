function formatar(lista) {
      let listaFormatada = [];
      let conte = 0;
      for (let item of lista) {
            conte++;
            if (conte < 10) {
                  listaFormatada.push(`0${conte}`);
            } else {
                  listaFormatada.push(`${conte}`);
            }
      }
      return listaFormatada;
}

module.exports = {
      formatar,
}
