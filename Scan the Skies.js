function scanningSkies(arr) { 
    return Array.from(arr.sort((a, b) => 
        (b.dist - a.dist) || (a.price - b.price)
    ), el => el.dest)
  }

arr = [
   {'dest': 'ATL', 'dist': 1300, 'price': 220},  
   {'dest': 'PEK', 'dist': 7000, 'price': 703},  
   {'dest': 'DXB', 'dist': 9000, 'price': 945},  
   {'dest': 'LAX', 'dist': 1300, 'price': 157}
]

console.log(scanningSkies(arr))