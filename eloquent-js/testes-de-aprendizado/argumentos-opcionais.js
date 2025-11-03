function power(base, exponent){
    if(exponent == undefined) {
        exponent = 2
    } 
    let result = 1
    for(let count = 0; count < exponent; count++) {
        result *= base
    }
    return result
}

console.log(power(4))
// 4 x 4 = 16
console.log(power(4, 3))
//4³ = 4 x 4 x 4 = 64