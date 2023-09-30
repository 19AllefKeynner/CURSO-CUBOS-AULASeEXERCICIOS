const mixedArray = [1, [2, 3], 4, [5, 6]];
const flatArray = [].concat(...mixedArray);
console.log(flatArray);