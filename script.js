campo = document.getElementById("campo");
var livro = {
  titulo : "genesis",
  autor : "Moises",
  information : function(){ return this.titulo + " escritor por " + this.autor;}
}
console.log(campo.value);
console.log(typeof livro.information)
console.log(typeof livro.information());

function calculo(x){return(x);}
console.log(calculo(undefined));

var casa;
console.log(casa);

let intentos = [1,5,10,12];
console.log(intentos[4]);

let siglas = [
  'fmi',
  'bird',
  ['onu','unesco'],
  'birf'
]
console.log(siglas[2][1]);

let num = [5,5,[3,4,[5,6],7]];
console.log(num[2][2][1]);
document.write(num);