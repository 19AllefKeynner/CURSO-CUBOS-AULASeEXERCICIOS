let cpf = 12345678911
cpf = String(cpf)

let cpnj = 12345678911002
cpnj = String(cpnj)


if (cpf.length != 11 ){
      console.log('O CPF está inválido!')

}else {
      const CPF = `${cpf.slice(0,3) + '.' + cpf.slice(3,6) + '.' + cpf.slice(6,9) + '-' + cpf.slice(9)}`
      console.log(CPF)

}

if(cpnj.length != 14){
      console.log('O CPNJ está inválido!')

}else {
      const CPNJ = `${cpnj.slice(0,2)}.${cpnj.slice(2,5)}.${cpnj.slice(5,8)}/${cpnj.slice(8,12)}-${cpnj.slice(12)}`
      console.log(CPNJ)
}