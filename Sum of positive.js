function positiveSum(arr) {  
    return arr.reduce((sum, elem) => {
        if (elem > 0) return sum + elem
        else return sum
    }, 0)
}

console.log(positiveSum([1,-2,3,4,5])) 