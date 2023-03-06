function XO(str) {
    let count = 0;
    for (i = 0; i < str.length; i++){
        const symbol = str[i].toLowerCase();
        if (symbol === 'o') count++
        else if (symbol === 'x') count--
    }
    return count === 0;
}

console.log(XO("xxOo"))
console.log(XO("xxxm"))
