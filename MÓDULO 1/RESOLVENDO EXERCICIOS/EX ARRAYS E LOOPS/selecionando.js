const listaNomes = ['allef', 'roger', 'clara', 'Afim']
let nomeSalvo = ''

for (let nome of listaNomes){
      if (nome[0] === 'a' || nome[0] === 'A'){
            nomeSalvo += `${nome} `
      }
}

console.log(nomeSalvo)