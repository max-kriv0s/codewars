function toWeirdCase(string){
    let index = -1
    return string.split('').map((el) => {
        if (el === ' ') {
            index = -1;
            return el}

        index++
        if (index % 2 === 0) return el.toUpperCase()
        
        return el.toLowerCase()
    }).join('')
  }

console.log(toWeirdCase('This is a test'));