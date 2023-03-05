function getMiddle(s)
{
    let indx = Math.floor(s.length / 2);
    if (s.length % 2 !== 0 ) {
        return s[indx];
    }
    return s.slice(indx - 1, indx + 1);
}

console.log(getMiddle("test")); //"es"
console.log(getMiddle("testing")); // "t"
console.log(getMiddle("middle")); // "dd"
console.log(getMiddle("A")); // "A"
