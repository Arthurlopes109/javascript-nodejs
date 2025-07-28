var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são ${hora} horas`)
if ( hora >= 6 && hora <= 12) { // Condição Aninhada
    console.log('Bom dia')
} else if (hora >= 0 && hora < 6) {
    console.log('Está de madrugada vá dormir')
} else if (hora <= 17) {
    console.log('Boa tarde')
} 
 else if (hora <= 23) {
    console.log('Boa noite')
}