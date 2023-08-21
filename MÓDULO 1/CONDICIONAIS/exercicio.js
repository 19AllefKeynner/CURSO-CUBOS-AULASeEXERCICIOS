let valor = 100 //opção
let parcelas = 7 //opção

let realReais = valor === 1 ? "real" : "reais" //variavel de controle = real se o valor for igual à 1 e reais se não for igual à 1
let porcentagem = valor - (valor / 100 * 10) //variavel de controle = 10% de desconto
let valorParcelas = valor / parcelas  //variavel de controle = parcelas sem juros
let valorParcelasJuros = (valor * (1 + 1 /100) ** parcelas) / parcelas  //variavel de controle = parcelas com juros de 1% ao mês


if (parcelas === 1){
      // a vista
      console.log(`O valor do seu produto é ${valor} ${realReais} e como voçê pagará avista terá 10% de desconto, o valor a ser pago será ${porcentagem} ${realReais}!`)
}

else if (parcelas >= 2 && parcelas <= 6){
      // parcelado sem juros
      console.log(`O valor do seu produto é ${valor} ${realReais} e como prefere parcelar não podemos oferecer desconto!`)
      console.log(`O valor das parcelas será de ${valorParcelas.toFixed(2)} ${realReais}!`)
}

else if (parcelas >= 7 && parcelas <= 12){
      // parcelado juros
      console.log("A compra dividida em mais de 6x terá juros!")
      console.log(`O valor da compra é de ${valor} ${realReais} e dividido em ${parcelas}x ficará ${valorParcelasJuros.toFixed(2)}`)

}

else{
      console.log("O número de parcelas digitado é inválido!")
}