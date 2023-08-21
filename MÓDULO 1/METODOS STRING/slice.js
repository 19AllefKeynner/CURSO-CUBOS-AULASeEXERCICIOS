const nome = 'Allef Keynner souza silva'

pegarSobrenome(nome)

function pegarSobrenome(nome){
      const inicio = nome.indexOf(' ')
      const sobrenome = nome.slice(inicio, nome.length)
      console.log(sobrenome)
}