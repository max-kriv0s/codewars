function sortArray(array) {
    let myArray = array.filter(el => el % 2 !== 0)
    myArray.sort((a, b) => a - b)
    return array.map(el => {
        if (el % 2 !== 0) return myArray.shift() 
        return el;
    })
}

console.log(sortArray([5, 3, 2, 8, 1, 4]));
