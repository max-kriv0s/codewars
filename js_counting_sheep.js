function countSheeps(arrayOfSheep) {
    let count = 0;
    if (!arrayOfSheep) {
        return count;
    }
    
    for (elem of arrayOfSheep) {
        if (elem){
            count++;
        }
    }

    return count;
}
  
let myArray = [true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true];

const totalCount = countSheeps(myArray)
console.log(totalCount)