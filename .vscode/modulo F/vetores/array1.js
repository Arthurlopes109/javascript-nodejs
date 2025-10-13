let auto = ['car2', 'car1', 'car5']

auto [3] = 'car3'//metodo automatizado de adção de mais um valor 
auto.push('car4')//metodo interno de adção de mais uma valor

/*A ordem de quem vem primeiro entre sort() e push importa muito na aparencia final!!!*/

console.log(`O primeiro valor do array é[${auto[0]}]`)
console.log(`O array tem ${auto.length} elementos`)
console.log(`Array em ordem crescente [${auto.sort()}] `)
