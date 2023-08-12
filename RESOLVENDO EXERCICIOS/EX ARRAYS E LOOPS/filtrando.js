const listaNum = [2,5,7,8,10,20,30]
const listaPares = []

for (let num of listaNum){
      if(num % 2 === 0){
            listaPares.push(num)
      }
}

console.log(listaPares)