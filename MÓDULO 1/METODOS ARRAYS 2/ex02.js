const array = ['arquivo.txt','arquivo.pdf','arquivo.txt','arquivo.jpg','arquivo.bat',]

const antiVirus = (lista) => {
      const resultado = lista.some((element) => {
            return element.slice(element.length -4) === '.bat'
      })

      console.log(resultado)
}

antiVirus(array)