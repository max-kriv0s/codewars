function duplicateEncode(word){
    const obj = word.split('').reduce((arr, el) => {
        const key = el.toLowerCase() 
        if (arr[key]) arr[key] += 1
        else arr[key] = 1

        return arr
    }, {})

    let res = ''
    for (let i = 0; i < word.length; i++) {
        if (obj[word[i].toLowerCase()] > 1) res += ')'
        else res += '(' 
    }
    return res;
}

console.log(duplicateEncode("din"));
console.log(duplicateEncode("recede"));