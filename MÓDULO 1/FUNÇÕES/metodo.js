const pessoa = {
      nome: 'Allef',
      idade: 20,
      ocupacao: 'estudante',
      altura: 1.70,
      apresentou: function(){
            return console.log(`Olá! me chamo ${this.nome}, Sou um(a) ${this.etaria()} de ${this.idade} anos, ${this.altura}m de altura e sou ${this.ocupacao}!`)

      },
      etaria: function(){
            if(this.idade <= 21){
                  return "Jovem"
            }else if(this.idade >= 22 && this.idade <= 65){
                  return "Adulto"
            }else if(this.idade >= 66 ){
                  return "Idoso"
            }
      }
}




pessoa.apresentou()
pessoa.etaria()