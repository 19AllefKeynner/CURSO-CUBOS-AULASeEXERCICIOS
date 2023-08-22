let cont = 0
const interval = setInterval(() => {
      console.log(cont)
      cont ++
      if (cont === 11)
      clearInterval(interval)
}, 1000)

