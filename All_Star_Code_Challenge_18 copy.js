function strCount(str, letter){  
    let count = 0;
    for (i = 0; i < str.length; i++) {
        if (str[i] === letter) count++;
    }
    return count;
}

console.log(strCount("Hello", 'o')); // returns 1