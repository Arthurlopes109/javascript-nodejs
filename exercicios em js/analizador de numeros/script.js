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
        window.alert("tudo ok")
   }else {
        window.alert('Valor invalido ou já está na lista.')
   }
}