const numero = 991115214

formataCelular(numero)

function formataCelular(numero){
      let numeroFormatado = ''
      if (String(numero).length === 11 ){
            numeroFormatado = `${String(numero).slice(0,2).padStart(3,'(')}) ${String(numero).slice(2,3)} ${String(numero).slice(3,7)}-${String(numero).slice(6)}`
            console.log(numeroFormatado)
      }else if(String(numero).length === 9 ){
            numeroFormatado = `${String(numero).slice(0,1)} ${String(numero).slice(1,5)}-${String(numero).slice(5)}`
            console.log(numeroFormatado)
      }else{
            console.log('formato de número invákido!')
      }
      
}