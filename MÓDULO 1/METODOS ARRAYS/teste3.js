const a = [1,2]
const b = [3,4]
const c = [5,6]

// usando o stread

const todos = [
      ...a,
      ...b,
      ...c
]

console.log(todos)


// usando o concat

const todos1 = a.concat(b, c)

console.log(todos1)