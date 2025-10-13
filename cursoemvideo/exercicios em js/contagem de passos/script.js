function contar() {
    let inicio = document.getElementById('caixa1')
    let fim = document.getElementById('caixa2')
    let salto = document.getElementById('caixa3')
    let resultado = document.getElementById('resultado')

    resultado.innerHTML = "Contando: <br>"

    if(inicio.value.length == 0 || fim.value.length == 0 || salto.value.length == 0){
        window.alert('[ERRO]')
        resultado.innerHTML = 'Impossivel contar'
    }

    let i = Number(inicio.value)
    let f = Number(fim.value)
    let s = Number(salto.value)

    if(s <= 0){
        window.alert('Passo invalido! Considerando Salto 1')
        s = 1
    }

    if(i < f) {
        for(let cont = i; cont <= f; cont += s) { // comtagem crescente
        resultado.innerHTML += `${cont} \u{1F449} `
      }
    } else if (i > f) {
        for(let cont2 = i; cont2 >= f; cont2-=s){ // contagem decrescente
            resultado.innerHTML += `${cont2} \u{1F449} `
        }
    }

    resultado.innerHTML += "\u{1F3C1}FIM"
}