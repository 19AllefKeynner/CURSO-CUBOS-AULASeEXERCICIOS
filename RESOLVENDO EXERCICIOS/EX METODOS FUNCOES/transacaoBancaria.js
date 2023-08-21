const contaBancaria = {
      nome: 'Allef',
      saldo: 0,
      historico: [],
      despositar: function (valorDeposito){
            this.saldo += valorDeposito
            this.historico.push({
                  tipo: 'deposito',
                  valor: valorDeposito
            })

            console.log(`Deposito de R$${valorDeposito /100} realizado para a cliente ${this.nome}`)
      },
      sacar: function(valorSaque){
            if (valorSaque > this.saldo){
                  console.log('Saldo insuficiente para este saque !')
            }else{
                  this.saldo -= valorSaque
                  this.historico.push({
                        tipo: 'saque',
                        valor: valorSaque
                  })
                  console.log(`Saque de R$${valorSaque /100} realizado para a cliente ${this.nome}`)
            }
            
      },
      imprimirExtrato: function(){
            let totalSaques = 0
            let totalDepositos = 0
            for (let item of this.historico ){
                  if (item.tipo === 'deposito'){
                        totalDepositos += item.valor
                  }else if(item.tipo === 'saque'){
                        totalSaques += item.valor
                  }
            }

            console.log(`\nExtrato de ${this.nome} Saldo: R$${this.saldo/100}\nHistórico:\nSaques: R$${totalSaques/100}\nDepositos: ${totalDepositos/100}\n`)
      }
}


contaBancaria.despositar(10000)
contaBancaria.sacar(50000)
contaBancaria.sacar(5000)
contaBancaria.imprimirExtrato()
