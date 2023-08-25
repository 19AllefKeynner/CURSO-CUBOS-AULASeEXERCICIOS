const produtos = [
      {Nome: 'arroz', preco: 500},
      {Nome: 'carne', preco: 3200},
      {Nome: 'biscoito', preco: 450},
      {Nome: 'banana', preco: 320},
]

function descontar(element, valorDescontoEmPorcento){
      let valorDesconto = valorDescontoEmPorcento * element.preco / 100
      return element.preco - valorDesconto
}

const funcaoQualquer = (array, funcao) => {
      const resultado = array.map((element)=> {
            return `\nnome: ${element.Nome}, preço com desconto: ${funcao(element, 10)}`
      })

      console.log(resultado)
}

funcaoQualquer(produtos, descontar)