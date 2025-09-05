function start() {
    let n1 = document.getElementById('txtn')
    let tab = document.getElementById('tabuada')

    if(n1.value.length == 0) {
        alert('sem numero')
    } else {
        let n = Number(n1.value)
        for(var num = 1; num <=10; num++){
           let item = document.createElement('option') 
           item.text = `${n} x ${num} = ${n*num}`
           tab.appendChild(item)
        }
    }
}