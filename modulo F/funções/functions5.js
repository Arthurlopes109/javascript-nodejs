// recurção em js é quando uma função chama ela mesma.
//é algo mais avançado 
function fatorial(n) {
    if(n == 1) {
        return 1
    } else {
        return n*fatorial(n-1)
    }
}
console.log(fatorial(4))

/*
conta para o fatorial de 5
5! = 5 x 4 x 3 x 2 x 1 = 120

fatorial de 4
4! = 24

fatorial de 4 x 5 é = o fatorial de 5
24 x 5 = 120
5! = 5 x 4! = 120
então aplicando essa logica no parâmetro n x (n-1) dentro do bloco posso ter o fatorial de qualquer numero.
n! = n x (n-1)!

fatorial de 1
1! = 1
*/