//Primeiro Argumento
/* function ImprimirInventárioDaFazenda(vacas, galinhas) {
     var Stringvacas = String(vacas)
     while (Stringvacas.length < 3)
         Stringvacas = "0" + Stringvacas
     console.log(Stringvacas + " vacas")
     var StringGalinhas = String(galinhas)
     while(StringGalinhas.length < 3) 
         StringGalinhas = "0" + StringGalinhas
     console.log(StringGalinhas + " galinhas")
 } 
 ImprimirInventárioDaFazenda(6, 9)*/

// Segundo Argumento
  /* function  AdicionarZerosAdicionarEtiqueta(numero, etiqueta) {
     var Stringnumero = String(numero)
     while(Stringnumero.length < 3)
         Stringnumero = "0" + Stringnumero;
     console.log(Stringnumero + " " + etiqueta)
 }

 function ImprimirInventárioDaFazenda(vacas, galinhas, porcos) {
    AdicionarZerosAdicionarEtiqueta(vacas, "Vacas")
     AdicionarZerosAdicionarEtiqueta(galinhas, "Galinhas")
     AdicionarZerosAdicionarEtiqueta(porcos, "Porcos")
 }
 ImprimirInventárioDaFazenda(7, 4, 12) */

// Terceiro Argumento

 function BlocoZero(number, largura) {
     var string = String(number)
         while(string.length < largura) 
     string = "0" + string
         return string
 }
 function InventarioDaFazenda(vacas, galinhas, porcos) {
     console.log(BlocoZero(vacas, 3) + " Vacas")
     console.log(BlocoZero(galinhas, 3) + " Galinhas")
     console.log(BlocoZero(porcos, 3) + " Porcos")
 }
 InventarioDaFazenda(4, 6, 23)
