const {format} =  require('date-fns')

const data = new Date()
const resultado = format(data, 'MM/dd/yyyy')

console.log(resultado)