function findOdd(A) {
    const res = A.reduce((acc, el) => {
        if (acc.hasOwnProperty(el)) acc[el] += 1;
        else acc[el] = 1;
        return acc;
    }, {})    

    for (key in res) {
        if (res[key] % 2 !== 0) return +key
    }

    return 0;
  }

console.log(findOdd([7])) 
// console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]))  