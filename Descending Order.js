function descendingOrder(n){
    myArray = n.toString().split('').map(Number);
    myArray.sort((a, b) => {return b - a});
    return +myArray.join('');
}

console.log(descendingOrder(1021)) // 2110