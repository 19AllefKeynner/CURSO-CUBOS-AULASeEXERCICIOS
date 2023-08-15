function etaria(idade){
      if(idade <= 21){
            return "Essa pessoa é: Jovem"
      }else if(idade >= 22 && idade <= 65){
            return "Essa pessoa é: Adulto"
      }else if(idade >= 66 ){
            return "Essa pessoa é: Idoso"
      }
}

const idade = 66
const faixaEtaria = etaria(idade)
console.log(faixaEtaria)