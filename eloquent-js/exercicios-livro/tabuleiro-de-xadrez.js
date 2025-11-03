let grade = ""
for(let linha = 0; linha < 8; linha++) {
  let linhaAtual = ""
  for(let coluna = 0; coluna < 8; coluna++) {
    if((linha + coluna) % 2 === 0){
        linhaAtual += "#"
    } else {
        linhaAtual += " "
    }
  } 
  grade += linhaAtual + "\n"
}
console.log(grade)