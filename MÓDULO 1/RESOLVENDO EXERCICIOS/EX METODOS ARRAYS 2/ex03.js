const listaCompras = ['arroz', 'feijao', 'vodka', 'carne', 'macarrao']

function revisaLista(lista){
      const resultado = lista.some((element)=>{
            return element === 'cerveja' || element === 'vodka'
      })

      console.log(resultado)
}

revisaLista(listaCompras)