const dataInicio = new Date(2002, 5, 30, 8)

const primeiroGol = (+dataInicio + (1000*60)*82)
const segundoGol = (+dataInicio + (1000*60)*94)

console.log(new Date(primeiroGol), new Date(segundoGol))