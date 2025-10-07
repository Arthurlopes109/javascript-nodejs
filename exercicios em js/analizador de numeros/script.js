let numeros = document.getElementById("number")
let lista = document.getElementById("list")
let res = document.getElementById("resultado")
let valores = []

function isNumero(n){
    if(Number(n) >=1 && Number(n) <= 100){
        return true
    }else {
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1) {
        return true
    }else{
        return false
    }
}

function start(){
   if(isNumero(numeros.value) && !inLista(numeros.value, valores)){
       valores.push(Number(numeros.value))
       let item = document.createElement('option')
       item.text = `Valor ${numeros.value} adicionado.`
       lista.appendChild(item)
       res.innerHTML = ''
    }else {
        window.alert('Valor invalido ou já está na lista.')
   }
   numeros.value = ''
   numeros.focus()
}

function end() {
    if(valores.length == 0){
        window.alert('O programa não pode iniciar pois nenhum valor foi adicionado!')
    }else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let posi in valores) {
            soma += valores[posi]
            if(valores[posi] > maior) {
                maior = valores[posi]
            }
            if(valores[posi] < menor) {
                menor = valores[posi]
            }
        }
        media = soma / total
        res.innerHTML =''
        res.innerHTML+= `<p>Ao todo, temos <strong>${total}</strong> números cadastrados</p>`
        res.innerHTML+= `<p>O maior valor adicionado é <strong>${maior}</strong></p>`
        res.innerHTML+= `<p>O menor valor adicionado é <strong>${menor}</strong></p>`
        res.innerHTML+= `<p>A soma de todos o valores é <strong>${soma}</strong></p>`
        res.innerHTML+= `<p>A media de todos o valores é <strong>${media}</strong></p>`
    }
}