function validatePIN (pin) {
    const res = pin.match(/[0-9]/g);
    if (res && res.length === pin.length && (res.length === 4 || res.length === 6)) return true
    return false
}

console.log(validatePIN(''))
console.log(validatePIN("a234"))
console.log(validatePIN("1234"))