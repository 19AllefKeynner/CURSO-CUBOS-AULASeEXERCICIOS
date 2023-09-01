const listaFrutas = ['Manga', 'aBAcaxi', 'uVa']

const formatarArray = (lista) => {
      const resultado = lista.map((element, indice)=>{
            return `${indice}-${element.slice(0,1).toUpperCase()}${element.slice(1).toLowerCase()}`
      })

      console.log(resultado)
}

formatarArray(listaFrutas)