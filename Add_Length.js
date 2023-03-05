function addLength(str) {
    return Array.from(str.split(' '), i => i + ' ' + i.length)
}

const myArray = addLength('apple ban')
console.log(myArray)