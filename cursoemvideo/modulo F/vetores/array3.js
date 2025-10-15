//Percurso de exibição de vetor com for(  in  ){} que é otimizado para vetores e objects

let num = [3,2,5,6,7]
//como se le o for(in): para(for) posição(pos) em(in) (num) eu leio(console.log) num[pos]
console.log(num)
for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}