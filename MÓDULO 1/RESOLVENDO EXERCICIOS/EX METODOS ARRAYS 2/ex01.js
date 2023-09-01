const livros = ['Guerra e Paz', 'A Montanha Mágica', 'Cem Anos de Solidão', 'Dom Quixote']

function PegaIndex(livro, nome){
      const resultado = livro.indexOf(nome) + 1
      console.log(resultado)
}

PegaIndex(livros, 'Guerra e Paz')