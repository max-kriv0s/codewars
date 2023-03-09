function duplicateCount(text){
    const res = text.split('').reduce((acc, el) => {
        if (acc.hasOwnProperty(el.toLowerCase())) acc[el.toLowerCase()] += 1 
        else acc[el.toLowerCase()] = 1
        return acc
    } , {})
    return Object.values(res).filter(el => el > 1).length
}

console.log(duplicateCount("aabBcde"));
console.log(duplicateCount("Indivisibility"));
console.log(duplicateCount("Indivisibilities"));