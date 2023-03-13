function solution(str){
    if (str.length % 2 !== 0) str += '_'
    return str.match(/\w\w/ig) === null ? [] : str.match(/\w\w/ig)
}

console.log(solution("abcdef"));
console.log(solution("abcdefg"));