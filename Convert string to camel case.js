function toCamelCase(str){
    return str.replace(/[-_]/g, '-').split('-').map((el, i) => {
        if (i === 0) return el
        return el.charAt(0).toUpperCase() + el.slice(1)
    }).join('')
}

console.log(toCamelCase("the_stealth_warrior"));