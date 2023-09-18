const imagens = document.querySelectorAll('.container img')
const img = document.querySelector('.modal img')
const modal = document.querySelector('.modal')


imagens.forEach(image => {
      image.addEventListener('click', function(){
            modal.style.display = 'flex'
            img.src = image.src
      })
})

modal.addEventListener('click', function(){
      modal.style.display = 'none'
})