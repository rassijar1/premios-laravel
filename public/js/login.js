/*=============================================
Función para crear Cookies en JS
=============================================*/

function crearCookie(nombre, valor, diasExpiracion){

	var hoy = new Date();

	hoy.setTime(hoy.getTime() + (diasExpiracion*24*60*60*1000));

	var fechaExpiracion = "expires=" +hoy.toUTCString();

	document.cookie = nombre + "=" +valor+"; "+fechaExpiracion;

}

/*=============================================
Capturar email login para convertirlo en variable Cookie
=============================================*/

$(document).on("change", ".email_login", function(){

	console.log("$(this).val()", $(this).val());

	crearCookie("email_login", $(this).val(), 1);

})


/*function DisableBackButton() {
window.history.forward()

}
DisableBackButton();
window.onload = DisableBackButton;
window.onpageshow = function(evt) { if (evt.persisted) DisableBackButton() }
window.onunload = function() { void (0) }*/
//window.location.replace();

//console.log(hostname);


/*=============================================
Crear variable localstorage para no redirigir
al mismo sitio cuando se le de clic en el boton de atras de navegador
=============================================*/
localStorage.setItem('back', 'back2');

    


