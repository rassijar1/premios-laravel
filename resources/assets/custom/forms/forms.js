/* Validacion desde boostrap 4 */


(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Get the forms we want to add validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();


/*=============================================
Función para validar data repetida
=============================================*/
function validateRepeat(event, type, table, suffix){


  var data = new FormData();
  data.append("data", event.target.value);
  data.append("table", table);
  data.append("suffix", suffix);

  $.ajax({
    url: "ajax/ajax-validate.php",
    method: "POST",
    data: data,
    contentType: false,
    cache: false,
    processData: false,
    success: function(response){
    
      if(response == 200){

        event.target.value = "";
        $(event.target).parent().addClass("was-validated");
        $(event.target).parent().children(".invalid-feedback").html("El registro ya existe en la base de datos");

      }else{

        validateJS(event, type);

      }

    }
  
  })


}


/* funcion para validar formulario */


function validateJS(event,type){

var pattern;

  if(type == "text") pattern = /^[A-Za-zñÑáéíóúÁÉÍÓÚ ]{1,}$/;

  if(type == "t&n") pattern = /^[A-Za-z0-9]{1,}$/;

  if(type == "email") pattern = /^[.a-zA-Z0-9_]+([.][.a-zA-Z0-9_]+)*[@][a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,4}$/;

  if(type == "pass") pattern = /^[#\\=\\$\\;\\*\\_\\?\\¿\\!\\¡\\:\\.\\,\\0-9a-zA-Z]{1,}$/;

  if(type == "regex") pattern = /^[-\\(\\)\\=\\%\\&\\$\\;\\_\\*\\"\\#\\?\\¿\\!\\¡\\:\\,\\.\\0-9a-zA-ZñÑáéíóúÁÉÍÓÚ ]{1,}$/;

  if(type == "phone") pattern = /^[-\\(\\)\\0-9 ]{1,}$/;

  if(type == "cod") pattern = /^[0-9]{1,}$/;

  if(type == "placa") pattern = /^[A-Z]{3}\d{3}$/;

  if(!pattern.test(event.target.value)){

    $(event.target).parent().addClass("was-validated");
    $(event.target).parent().children(".invalid-feedback").html("Field syntax error");

  }


console.log("type", type);
console.log("event", event);



}


/* funcion para recordar credenciales de ingreso */


function rememberMe(event){

//console.log("event",event);
if(event.target.checked){


localStorage.setItem("emailRemember",$('[name="loginEmail"]').val());
localStorage.setItem("checkRemember",true);

}
else{

localStorage.removeItem("emailRemember");
localStorage.removeItem("checkRemember");


}


}



/* capturar el email del login desde el localstorage */


$(document).ready(function(){

if(localStorage.getItem("emailRemember")!=null){

$('[name="loginEmail"]').val(localStorage.getItem("emailRemember")); 

}


if(localStorage.getItem("checkRemember")!=null &&localStorage.getItem("checkRemember")){

$('#remember').attr("checked", true);
  
}


})

/* Activacion de boostrap switch */

 $("input[data-bootstrap-switch]").each(function(){
      $(this).bootstrapSwitch('state', $(this).prop('checked'));
    })


/*=============================================
=            Activacion select 2            =
=============================================*/

    $('.select2').select2({
      theme: 'bootstrap4'
    })

/*function validar() {
    var form = document.form;
    var actual=document.getElementById("actual").value;
    if (form.Recarga.value >300000) {
        Swal.fire({
            title: "ERROR!",
            text: "Fuera de rango. Recuerde que el maximo es de $300.000",
            icon: "error",
        });
        form.Recarga.value = "";
        form.Recarga.focus();
        return false;
    }


   if (form.Recarga.value ==0) {
        Swal.fire({
            title: "ERROR!",
            text: "El campo esta vacio",
            icon: "error",
        });
        form.Recarga.value = "";
        form.Recarga.focus();
        return false;
    }

   
     



}*/



/*function valor() {
    var n1 = document.getElementById("Recarga").value;
    var n2 = document.getElementById("actual").value;
    var resultado = sumar(n1,n2);
    document.getElementById("resultado").value = resultado;
}*/

function sumar(n1,n2){

  return parseInt(n1)+parseInt(n2);
}


function calcular(){
var form = document.form;
var n1 = parseInt(document.getElementById("Recarga").value),
n2 = parseInt(document.getElementById("actual").value);
var resultado = sumar(n1,n2);
document.getElementById("resultado").value = resultado;

if(resultado>300000) {
        Swal.fire({
            title:"ERROR!",
            text: "Fuera de rango. Recuerde que el maximo es de $300.000",
            icon: "error",
        });
        form.Recarga.value = "";
        form.Recarga.focus();
        form.resultado.value = "";
        form.resultado.focus();
        return false;


    }

if (form.Recarga.value ==0) {
        Swal.fire({
            title: "ERROR!",
            text: "El campo esta vacio",
            icon: "error",
        });
        form.Recarga.value = "";
        form.Recarga.focus();
        form.resultado.value = "";
        form.resultado.focus();
        return false;
    }


}
function calcularRango(){
var form = document.form;
var n1 = parseInt(document.getElementById("Recarga").value),
n2 = parseInt(document.getElementById("DineroLlegado").value);
var resultado = sumar(n1,n2);


if(resultado>300000) {
        Swal.fire({
            title:"ERROR!",
            text: "El maximo monto a tener es de $300.000",
            icon: "error",
        });
        form.Recarga.value = "";
        form.Recarga.focus();
        form.resultado.value = "";
        form.resultado.focus();
        return false;


    }

if (form.Recarga.value ==0) {
        Swal.fire({
            title: "ERROR!",
            text: "El campo esta vacio",
            icon: "error",
        });
        form.Recarga.value = "";
        form.Recarga.focus();
        form.resultado.value = "";
        form.resultado.focus();
        return false;
    }


}


/*function pasarmodal(){

//placa = document.getElementById("placa").value;
document.getElementById("placa").value = document.getElementById("nombre").value; 

}*/

