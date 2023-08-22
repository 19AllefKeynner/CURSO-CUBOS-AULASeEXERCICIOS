const array = ['arquivo.txt','arquivo.pdf','arquivo.txt','arquivo.jpg','imagens.bat',]

const antiVirus = (lista) => {
      const resultado = lista.find((element) => {
            return element.slice(element.length -4) === '.bat'
      })

      console.log(resultado)
}

antiVirus(array)