const carro = {
      ligado: false,
      velocidade: 0,
      imprimirStatus: function(){
            const ligadoDesligado = this.ligado ? 'ligado' : 'desligado'
            console.log(`Carro ${ligadoDesligado}. velocidade ${this.velocidade}`)
      },
      ligar: function(){
            if (this.ligado === true){
                  console.log('Esse carro já está ligado!')
            }else if (this.ligado === false){
                  this.ligado = true
                  this.imprimirStatus()
            }
      },
      desligar: function(){
            if (this.ligado === false){
                  console.log('Esse carro já está desligado!')
            }else if (this.ligado === true && this.velocidade === 0){
                  this.ligado = false
                  this.imprimirStatus()
            }else{
                  console.log('Carro em movimento, impossivel desligar!')
            }
      },
      acelerar: function(){
            if (this.ligado === false){
                  console.log('Não é possivel acelerar um carro desligado!')
            }else if (this.ligado === true){
                  this.velocidade += 10
                  this.imprimirStatus()
            }
      },
      desacelerar: function(){
            if (this.ligado === false){
                  console.log('Não é possivel desacelerar um carro desligado!')
            }else if (this.ligado === true){
                  this.velocidade -= 10
                  this.imprimirStatus()
            }
      }
      
}

carro.desligar()
carro.ligar()
carro.ligar()
carro.acelerar()
carro.acelerar()
carro.desacelerar()
carro.desligar()
carro.acelerar()
carro.desacelerar()
carro.desacelerar()
carro.desligar()
