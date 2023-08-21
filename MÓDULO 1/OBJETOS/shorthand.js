const gol = {
      placa: '0983636',
      ano: 2020
}

const carros = {
      palio: null,
      toyotaSupra: {
            potencia: '324 cv',
            ano: '1993',
            suspensao: ['independente', 'multibraço']
      },
      gol
}

console.log(carros)


console.log(carros.gol)

if (carros.palio != null){
      console.log('Tem palio aqui!')
}else{
      console.log("não tem palio!")
}

console.log(carros.toyotaSupra)
console.log(`${carros.toyotaSupra.ano}
${carros.toyotaSupra.potencia}
${carros.toyotaSupra.suspensao}`)

