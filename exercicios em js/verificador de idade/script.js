function start(){
   var data = new Date()
   var ano_atual = data.getFullYear()
   var ano = document.querySelector('input#ano')
   var resposta = document.querySelector('div#resultado')

   if(ano.value.length == 0 || Number(ano.value) > ano_atual ) {
    //value.length mede o se o comprimento do valor é igual a 0
    window.alert('[ERRO]')
   }
   else{
     var input_sexo = document.getElementsByName('sexo')
     var idade = ano_atual - Number(ano.value)
     var gênero = ''
     var img = document.createElement('img')
     img.setAttribute('id', 'foto')
     if(input_sexo[0].checked) {
        gênero = 'Homem'
        if(idade >=0 && idade < 10){
            //criança
            img.setAttribute('src', 'imagens/menino.png')
        }
        else if (idade < 25){
            //jovem
            img.setAttribute('src', 'imagens/novinho.png')
        } 
        else if(idade < 50){
            //Homem adulto
            img.setAttribute('src', 'imagens/homem.png')
        }
        else {
            // velho
            img.setAttribute('src', 'imagens/velho.png')
        }
     }  
    else if(input_sexo[1].checked){
        gênero = 'Mulher'
        if(idade >=0 && idade < 18){
            //criança
        }
        else if (idade < 25){
            //jovem
        } 
        else if(idade < 50){
            //Mulher adulta
        }
        else{
            // velha
        }
    }
    resposta.style.textAlign ='center'
    resposta.innerHTML = `${gênero} com ${idade} anos`
    resposta.appendChild(img)
   }
}