const listaProdutos = [2000, 3500, 600, 3000]

promocao(listaProdutos)

function promocao(lista){
      let menorPreco = 0
      let total = 0
      let contt = 0
      if (lista.length >= 5){
            for (let item of lista){
                  total += item
                  if(contt === 0){
                        menorPreco = item
                  }else{
                        if(item < menorPreco){
                              menorPreco = item
                        }
                  }
                  contt = 1
            }
            console.log(`O total a pagar é ${total-menorPreco}, com a promoção aplicada!`)
      }else{
            for (let item of lista){
                  total += item
            }
            console.log(`O total a pagar é ${total}, sem promoção aplicada!`)
      }
}