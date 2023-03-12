var uniqueInOrder=function(iterable){
    const iter = typeof iterable === 'string' ? iterable.split('') : iterable 
    
    return iter.reduce((acc, el) => {
        if (acc.length === 0 || acc[acc.length - 1] !== el) acc.push(el)
        return acc
    }, [])
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'));
console.log(uniqueInOrder([1,2,2,3,3]));