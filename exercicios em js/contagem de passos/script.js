function contar() {
    const inicio = document.getElementById('inicio')
    const fim = document.getElementById('fim')
    const salto = document.getElementById('salto')
    const res = document.getElementById('resp')

    if (inicio.value.length == 0 || fim.value.length == 0 || salto.value.length == 0){
        alert('[erro]')
    } else {
        alert('ok')
    }
}