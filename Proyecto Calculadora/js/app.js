var calculadora ={
  reducirTamanoTecla: function (elemento){
    elemento.style.borderRadius="40%"
  },
  aumentarTamanoTecla: function(elemento){
    elemento.style.borderRadius="0%"
  },
  asignarNumeroEnPantalla: function (elemento){
    var valorDisplay= document.getElementById('display').textContent
  //  if (elemento.id==valorDisplay && valorDisplay==0) {
      //alert("No puedes ingresar cero si la pantalla ya contiene cero.")
    //}
  //else {
      // NOTE: validacion para borrar el cero de la pantalla
      if (valorDisplay==0 && elemento.id!="on" && elemento.id!="sign" && elemento.id!="raiz" &&elemento.id!="dividido" && elemento.id!="por" && elemento.id!="menos" && elemento.id!="punto" && elemento.id!="igual" &&elemento.id!="mas" ) {
        valorDisplay=document.getElementById('display').textContent=""
      }
      // NOTE: validacion para que solo permite escribir numeros
      if (elemento.id!="on" && elemento.id!="sign" && elemento.id!="raiz" &&elemento.id!="dividido" && elemento.id!="por" && elemento.id!="menos" && elemento.id!="punto" && elemento.id!="igual" &&elemento.id!="mas") {
        document.getElementById('display').textContent=valorDisplay+elemento.id
      }

      if (elemento.id=="punto" && document.getElementById("display").textContent.indexOf(".")== -1) {
        document.getElementById('display').textContent=valorDisplay+"."
      }

  //  }
  },
  limpiarPantalla: function (elemento){
    if (elemento.id=="on") {
      document.getElementById('display').textContent="0"
    }
  },

  asignarEventosTeclas:function(){
    tecla= document.querySelectorAll('.tecla')
    teclaNumeros= document.querySelectorAll("img[class=tecla]");
    for (var i = 0; i < tecla.length; i++) {
      tecla[i].onmousedown= this.eventoReducirBotones;
      tecla[i].onmouseup= this.eventoAumentarBotones;
      tecla[i].onclick= this.eventoAsignarNumero;
    }
  },
  eventoReducirBotones: function(){
    calculadora.reducirTamanoTecla(event.target);
  },
  eventoAumentarBotones: function() {
    calculadora.aumentarTamanoTecla(event.target);
  },
  eventoAsignarNumero: function(){
    calculadora.asignarNumeroEnPantalla(event.target);
    calculadora.limpiarPantalla(event.target);
    calculadora.escribirPunto(event.target);
  }

}

function Init(){
calculadora.asignarEventosTeclas()
}
Init()
