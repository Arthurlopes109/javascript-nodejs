function start(){
    var inicio = Number(document.getElementsByName('n1')[0].value)
    var fim = Number(document.getElementsByName('n2')[0].value)
    var salto = Number(document.getElementsByName('pulo')[0].value)
    var resp = document.getElementById('resultado')

    resp.innerHTML ='Contando: <br>'

    if(salto <= 0) {
        alert('O salto tem que ser maior que 0')
    }

    for(var c = inicio; c <= fim; c += salto) {
        resp.innerHTML += `${c} 👉`
    }

    resp.innerHTML += `🏁`
}