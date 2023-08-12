const alunoAltura = 180


if (alunoAltura < 180){
      console.log('Aluno reprovado!')
}else if(alunoAltura > 180 && alunoAltura < 185){
      console.log('Posição para teste: Líbero!')
}else if(alunoAltura > 186 && alunoAltura < 195){
      console.log('Posição para teste: Ponteiro!')
}else if(alunoAltura > 196 && alunoAltura < 205){
      console.log('Posição para teste: Oposto!')
}else if(alunoAltura > 205){
      console.log('Posição para teste: Central!')
}