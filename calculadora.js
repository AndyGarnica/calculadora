//asignar valores
function asignarValores(num){
  var asignar=document.formulario.valores.value;
  document.getElementById("valores").value=asignar+num;
}
//validar los signos
function comprobar(num){
  var asignar = document.formulario.valores.value;
  if(asignar==""){
    document.formulario.valores.value="";
  }else{
    var asignar = document.formulario.valores.value;document.getElementById("valores").value=asignar+num;
    esto=document.formulario.valores.value;

    cero=0;
    uno=1;
    var letraCero
    var b=0
    var letra=""

    for (i=1;i<this.length;i++){
      if (this.charAt(a)=="+" || this.charAt(a)=="-" || this.charAt(a)=="*" || this.charAt(a)=="/" || this.charAt(a)=="."){
        uno=uno+1;
        letra=this.charAt(i);
      }else{
        if(uno>cero){
          cero=uno;letraCero=letra
        } uno=1
      }
      b=i
    }
    if(uno>cero){
      cero=uno;letraCero=letra;
    }
    if (cero>2){
      var asignar = this;
      var nuevoValor = asignar.substring(0, asignar.length-1);
      document.getElementById("valores").value=nuevoValor;
      cero=0;b=0;uno=1;letra="";letraCero="";
    }
  }
}

//operaciones matematicas

function calcular(){
  var resultado=eval(document.formulario.valores.value);
  if(resultado=="Infinity"){
    document.formulario.valores.value="No se puede dividir entre cero";
    }else{
      document.formulario.valores.value=resultado;
    }
  }
  //eliminar el ultimo caracter
  function eliminar(){
    var asignar=document.formulario.valores.value;
    var nuevoValor=asignar.substring(0,asignar.length-1);
    document.getElementById("valores").value=nuevoValor;
  }

  //reiniciar
  function reiniciar(){
    document.formulario.valores.value="";
  }
