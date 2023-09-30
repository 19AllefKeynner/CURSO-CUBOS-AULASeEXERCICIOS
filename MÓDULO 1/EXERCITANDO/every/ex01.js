const idades = [18,19,21,23,45,22,20]

function testarIdade(array){
      const resultado = array.every((item)=>{
            return item >= 18
      })
      
      if(resultado === true){
            return 'Todos são maiores de idade!'
      }else{
            return 'Existem menores de idade na lista!'
      }
}

console.log(testarIdade(idades))