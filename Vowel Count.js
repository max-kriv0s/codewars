function getCount(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    return str.split('').filter((el) => vowels.includes(el)).length;
  }

  console.log(getCount("abracadabra")) // 5