function splitTheBill(x) {
    const myArray = Object.values(x);
    const avg = myArray.reduce((t, el) => {
        return t + el;
    }) / myArray.length;
    for (i in x){
        x[i] = +(x[i] - avg).toFixed(2);
    }
    return x;
}

console.log(splitTheBill({A: 20, B: 15, C: 10}))