let comentario = 'essa cidade é muito perigosa!'
comentario = comentario.toUpperCase()

if (comentario.includes('COVID') === false && comentario.toLocaleLowerCase().includes('pandemia') === false){
      console.log('comentário autorizado!')
}else{
      console.log('comentário não autorizado, vai contra a nossa politica!')
}