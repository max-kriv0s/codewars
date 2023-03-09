function arrayDiff(a, b) {
    let myArray = [];
    for (let i = 0; i < a.length; i++) {
        if (!b.includes(a[i])) myArray.push(a[i])
    }
    return myArray;
}

console.log(arrayDiff([1,2], [1]));
console.log(arrayDiff([1,2,2], [1]));