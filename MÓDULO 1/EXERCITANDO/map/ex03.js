const pessoas = [
      { nome: "João", altura: 1.75, peso: 75 },
      { nome: "Maria", altura: 1.60, peso: 65 },
      { nome: "Carlos", altura: 1.85, peso: 90 }
];

function calcularImc(altura, peso){
      return (peso / (altura * altura)).toFixed(1)
}

function introduzirImc(array){
      array.map(item => {
            return item.imc = calcularImc(item.altura, item.peso)
      })
}

introduzirImc(pessoas)
console.log(pessoas)