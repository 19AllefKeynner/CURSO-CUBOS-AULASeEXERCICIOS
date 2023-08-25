const array  = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      9
]

const resultado = () => {
      console.log(array.findIndex((element)=>{
            return element === 7
      }))
}

resultado()