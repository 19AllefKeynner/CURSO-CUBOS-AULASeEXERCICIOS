let pedidos = ['pedido 15' , 'pedido 16' , 'pedido 17' , 'pedido 18']
const numeroPedidos = []
let maior = ''
let menor = ''

console.log("Lista de pedidos: " + pedidos)

for(let pedido of pedidos){
      numeroPedidos.push(pedido.slice(-2))
}

let conte = 0
while(conte < numeroPedidos.length){
      if (conte === 0){
            maior = numeroPedidos[conte]
            menor = numeroPedidos[conte]
      }else{
            if(numeroPedidos[conte] > maior){
                  maior = numeroPedidos[conte]
            }else if (numeroPedidos[conte] < menor){
                  menor = numeroPedidos[conte]
            }
            
      }
      conte ++
}

for(let pedido of pedidos){
      if ((pedido.slice(-2)) === menor){
            pedidos = pedidos.filter(item => item !== pedido);
      }else if((pedido.slice(-2)) === maior){
            let novo = Number((pedido.slice(-2))) + 1
            pedidos.push(`pedido ${novo}`)
      }
}

console.log("Lista de pedidos atualizada: " + pedidos)
