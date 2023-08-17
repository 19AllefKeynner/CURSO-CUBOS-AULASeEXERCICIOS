const cidade = 'Salvador-BA'

pegarEstado(cidade)

function pegarEstado (cidade){
      const siglasEstadosBrasil = [
            "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA",
            "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN",
            "RS", "RO", "RR", "SC", "SP", "SE", "TO"
          ];
      
      
      const nomesEstadosBrasil = [
            "Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal",
            "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais",
            "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte",
            "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"
      ];

      const estado = cidade.slice(-2)
      let contador = 0 
      let indice = 0

      for(let siglaEstado of siglasEstadosBrasil){
            if (estado === siglaEstado){
                  indice = contador
            }
            contador ++
      }

      console.log(`${estado} ou (${nomesEstadosBrasil[indice]})!`)
}




