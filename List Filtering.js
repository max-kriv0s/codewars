function filter_list(l) {
    let myArray = []
    for (let el of l) {
        if (typeof el === 'number' && !myArray.includes(el)) {
            myArray.push(el);
        }
    }    
    return myArray;
  }


// console.log(filter_list([1,2,'a','b']));
console.log(filter_list([1,'a','b',0,15]));
