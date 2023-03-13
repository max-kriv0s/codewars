function digPow(n, p){
    let total = 0;
    for (let i in n.toString()) {
        total += Math.pow(+n.toString()[i], p);
        p++;
    }

    if (total % n === 0) return total / n

    return -1
}

console.log(digPow(46288, 3)); // 51