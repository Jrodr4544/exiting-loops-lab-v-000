var breakOut = (array, changeValue, stopValue) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === stopValue) {
      return array
    }
    array[i] = changeValue
  }
}

var keepGoing = (array, changeValue, skipValue) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === skipValue) {
        continue;
      }
      array[i] = changeValue
    }
    return array
}

var findBy = (array, findFn) => {
  return array.forEach(findFn)
  array.forEach(function(element) {
   if (element === findFn) {
     return element
   } 
  })
  return null
}

// var findFn = (element) => {
//     // return (element === value ? element : null)
//     return element
// }