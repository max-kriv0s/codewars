function accum(s) {
    const myArray = s.split('').map((elem, index) => {
        let newStr = elem.toUpperCase();
        for (i = 1; i <= index; i++) {
            newStr += elem.toLowerCase();
        }
        return newStr;
    });
    return myArray.join('-');
}

console.log(accum("ZpglnRxqenU"));
