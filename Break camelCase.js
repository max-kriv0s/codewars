function solution(string) {
    let new_str = ""    
    for (i in string) {
        if (string[i].toUpperCase() === string[i]) new_str += ' ' + string[i]  
        else new_str += string[i]
    }
    return new_str;

}

console.log(solution('camelCasing'));
console.log(solution('camelCasingTest'));