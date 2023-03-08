var isSquare = function(n){
    // console.log(Math.sqrt(n))
    
    if (!isNaN(Math.sqrt(n)) && Math.sqrt(n) === Math.round(Math.sqrt(n))) return true
    
    return false; // fix me
}

console.log(isSquare(-1));
console.log(isSquare(3));
console.log(isSquare(4));