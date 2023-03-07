function mostFrequentItemCount(collection) {
    if (collection.length === 0) return 0

    let res = {}
    for (el of collection) {
        if (res[el]) res[el]++
        else res[el] = 1
    }
    return Math.max(...Object.values(res))
}

console.log(mostFrequentItemCount([3, -1, -1]))
console.log(mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]))
console.log(mostFrequentItemCount([]))