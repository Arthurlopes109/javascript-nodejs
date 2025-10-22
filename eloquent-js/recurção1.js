function power (base, exponent) {
    if(exponent == 0) 
        return 1
    else 
        return base * power (base, exponent - 1)
}
console.log(power(4, 3))
// 4³ = 4 x 4 x 4 = 64