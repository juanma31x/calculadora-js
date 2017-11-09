var calculadora ={
  primerNum: 0,
  antiguoNumero: 0,
  acumulado: 0,
  operadorActual:"",

  reducirTamanoTecla: function (elemento){
    elemento.style.borderRadius="40%"
  },
  aumentarTamanoTecla: function(elemento){
    elemento.style.borderRadius="0%"
  },
  asignarNumeroEnPantalla: function (elemento){
    var valorDisplay= document.getElementById('display').textContent
 
      // NOTE: validacion para borrar el cero de la pantalla
      if (valorDisplay==0 && elemento.id!="on" && elemento.id!="sign" && elemento.id!="raiz" &&elemento.id!="dividido" && elemento.id!="por" && elemento.id!="menos" && elemento.id!="punto" && elemento.id!="igual" &&elemento.id!="mas" ) {
        valorDisplay=document.getElementById('display').textContent=""
      }
      // NOTE: validacion para que solo permite escribir numeros
      if (elemento.id!="on" && elemento.id!="sign" && elemento.id!="raiz" &&elemento.id!="dividido" && elemento.id!="por" && elemento.id!="menos" && elemento.id!="punto" && elemento.id!="igual" &&elemento.id!="mas") {
       document.getElementById('display').textContent=valorDisplay+elemento.id
       primerNum= document.getElementById('display').textContent
      }

      if (elemento.id=="punto" && document.getElementById("display").textContent.indexOf(".")== -1) {
        document.getElementById('display').textContent=valorDisplay+"."
      }
      if (elemento.id=="dividido" || elemento.id=="por" || elemento.id=="menos" || elemento.id=="mas") {
        //document.getElementById('display').textContent=""
      }
      
  },
  limpiarPantalla: function (elemento){
    if (elemento.id=="on") {
      document.getElementById('display').textContent="0"
      primerNum=0
      this.acumulado=0
      operadorActual=""
    }
  },
  escribirSigno: function(elemento){
    var valorDisplay= document.getElementById('display').textContent
    if (valorDisplay!= 0 && elemento.id=="sign" && document.getElementById("display").textContent.indexOf("-")== -1) {
      document.getElementById('display').textContent="-"+ valorDisplay
    }
    else if (document.getElementById("display").textContent.indexOf("-",0)== 0) {
      var signo = document.getElementById("display").textContent.replace('-','')
      document.getElementById('display').textContent=signo;
    }
  },

  validarLongitud: function(elemento){
    var cadenaDisplay= document.getElementById('display').textContent
    var chimi= elemento.id
    if (cadenaDisplay.length>=8 && elemento.id!="on" && elemento.id!="sign" && elemento.id!="raiz" &&elemento.id!="dividido" && elemento.id!="por" && elemento.id!="menos" && elemento.id!="igual" &&elemento.id!="mas" ) {
       throw new Error();
      }
  },

  operacionSuma: function(elemento){
    antiguoNumero= primerNum
    if (elemento.id=="mas") {
      this.acumulado = parseFloat(this.acumulado) + parseFloat(antiguoNumero)
      document.getElementById('display').textContent=""
      operadorActual= elemento.id
    }
    if (elemento.id=="por") {
      this.acumulado = (parseFloat(this.acumulado) +1) * parseFloat(antiguoNumero)
      document.getElementById('display').textContent=""
      operadorActual= elemento.id
    }
  },

  signoIgual: function(elemento){
    if (elemento.id=="igual"){
    var numuno= parseFloat(antiguoNumero)
    var numerodos= this.acumulado
    if (operadorActual=="mas") {
      document.getElementById('display').textContent= numuno+numerodos
    }
    else if (operadorActual=="por") {
      document.getElementById('display').textContent= numuno*numerodos
    }
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
    calculadora.validarLongitud(event.target)
    calculadora.asignarNumeroEnPantalla(event.target);
    calculadora.limpiarPantalla(event.target);
    calculadora.escribirSigno(event.target);
    calculadora.operacionSuma(event.target)
    calculadora.signoIgual(event.target)
    }

}

function Init(){
calculadora.asignarEventosTeclas()
}
Init()
