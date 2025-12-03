function equalArrays(a,b) { // Comparador de arrays
 if (a.length != b.length) return false; // Arrays de tamanho diferente não são
 // iguais
 for(var i = 0; i < a.length; i++) // Itera por todos os elementos
 if (a[i] !== b[i]) return false; // Se algum difere, os arrays não são
 // iguais
 return true; // Caso contrário, eles são iguais
}
console.log(equalArrays())