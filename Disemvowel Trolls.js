function disemvowel(str) {
    return str.replace(/[aeiou]/ig, '');
}

console.log(disemvowel("What are you, a communist?"))