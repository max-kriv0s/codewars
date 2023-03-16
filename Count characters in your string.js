function count(string) {  
  return string.split('').reduce((acc, el) => {
    if (el in acc) acc[el] += 1
    else acc[el] = 1
    return acc;
  }, {});
}

console.log(count('aba'));