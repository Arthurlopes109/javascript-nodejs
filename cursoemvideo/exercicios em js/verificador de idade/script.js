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
     var img = document.getElementById('foto')
     if(input_sexo[0].checked) {
        gênero = 'Homem'
        if(idade >=0 && idade < 10){
            //criança
            img.src = 'imagens/menino.png'
        }
        else if (idade < 25){
            //jovem
            img.src = 'imagens/novinho.png'
        } 
        else if(idade < 50){
            //Homem adulto
            img.src = 'imagens/homem.png'
        }
        else {
            // velho
           img.src = 'imagens/velho.png'
        }
     }  
    else if(input_sexo[1].checked){
        gênero = 'Mulher'
        if(idade >=0 && idade < 18){
            img.src = 'imagens/menina.png'
        }
        else if (idade < 25){
            //jovem
            img.src = 'imagens/novinha.png'
        } 
        else if(idade < 50){
            //Mulher adulta
            img.src = 'imagens/mulher.png'
        }
        else{
            // velha
            img.src = 'imagens/velha.png'
        }
    }
    
    resposta.style.textAlign ='center'
    resposta.innerHTML = `${gênero} com ${idade} anos<br>`
    resposta.appendChild(img)
   }
}