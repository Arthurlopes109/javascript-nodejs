var agora = new Date()
var hora = agora.getHours()
if (hora >= 6 && hora <=12) {
    console.log(`Agora são ${hora} horas está de dia`)
} 
else if(hora >=13 && hora <=17) {
    console.log(`Agora são ${hora} horas está de tarde`)
}
else if(hora >=18 && hora <=23) {
    console.log(`Agora são ${hora} horas está de noite`)
}