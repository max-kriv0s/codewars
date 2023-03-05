function squareDigits(num){
    const myArray = [].map.call(num.toString(), val => val ** 2);
    return Number(myArray.join(''));
}

console.log(squareDigits(3212)) // 9414
