function isIsogram(str){ 
    const obj = str.split('').reduce((arr, el) => {
        const key = el.toLowerCase()
        if (arr[key]) arr[key] += 1
        else arr[key] = 1
        return arr
    }, {})

    return Object.values(obj).filter(el => el > 1).length === 0
}

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("aba"));