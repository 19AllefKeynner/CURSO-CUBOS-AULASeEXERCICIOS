const email = 'allef4670@@gmail.com'

function verificaEmail(email){
      if (email.indexOf('@') > -1){
            const indice = email.indexOf('@') 
            if(email.indexOf('.', indice) != -1 && email.indexOf('@', indice + 1) === -1 ){
                  console.log('Email correto!')
            }else{
                  console.log('Email incorreto!')
            }
      }else{
            console.log('Email incorreto!')
      }
}

verificaEmail(email)