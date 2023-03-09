function spinWords(string){
    myArray = string.split(' ')
    return myArray.map(el => {
        if (el.length >= 5) {
            return el.split('').reverse().join('');
        }
        return el;
    }).join(' ')
}

console.log(spinWords("Welcome"))
console.log(spinWords("This is a test"));