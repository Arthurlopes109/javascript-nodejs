function horadodia() {
    var mensagen = document.querySelector('div#msg')
    var imagen = document.querySelector('img#foto')
    var data = new Date()
    var hora =  data.getHours()

    mensagen.innerHTML = `Agora são ${hora} horas`

    if(hora >= 6 && hora <= 12) {
        imagen.src = 'imagens/img-dia.jpg'
        document.body.style.background = '#e2cd9f'
    } 
    else if (hora >=13 && hora <=17) {
        imagen.src = 'imagens/img-tarde.jpg'
        document.body.style.background = '#7a4b3dff'
    }
    else {
        imagen.src = 'imagens/img-noite.jpg'
        document.body.style.background = '#181c30ff'
    }
}