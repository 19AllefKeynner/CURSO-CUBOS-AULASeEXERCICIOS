let array = ['banana', 'maçã','abacaxi','pêra','uva']

const arrayForamatada = []

for(let item of array){
      arrayForamatada.push(item)
}

const string = arrayForamatada.reverse().join(', ')


array.shift()
array.splice(-1,1, 'melão')

console.log(string)
console.log(array)