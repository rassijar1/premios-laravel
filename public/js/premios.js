/*=============================================
DataTable Servidor de Mascotas
=============================================*/

// $.ajax({

// 	url: ruta+"/Mascotas",
// 	success: function(respuesta){
		
// 		console.log("respuesta", respuesta);

// 	},
// 	error: function (jqXHR, textStatus, errorThrown) {
//         console.error(textStatus + " " + errorThrown);
//     }

// })

/*=============================================
DataTable de Mascotas
=============================================*/

var tablaMascotas = $("#tablaPremios").DataTable({
	
	processing: true,
  	serverSide: true,
  	 "aLengthMenu":[[5, 10, 50, 100, 500],[5, 10, 50, 100, 500]],

  	ajax:{
  		url: ruta+"/premios"		
  	},

  	"columnDefs":[{
  		"searchable": true,
  		"orderable": true,
  		"targets": 0
  	}],

  	"order":[[0, "desc"]],

  	columns: [
	  	{
	    	data: 'id_premio',
	    	name: 'id_premio'
	  	},
	  	{
	  		data: 'url_premio',
	    	name: 'url_premio'
	  	},
	  	{
	  		data: 'genero',
	    	name: 'genero'
	  	},
	  	{
	  		data: 'cultura',
	    	name: 'cultura'
	  	},
	  	{
	  		data: 'aliado',
	    	name: 'aliado'
	  	},
	  
	  	{
	  		data: 'acciones',
	    	name: 'acciones'
	  	}

	],
 	"language": {

	    "sProcessing": "Procesando...",
	    "sLengthMenu": "Mostrar _MENU_ registros",
	    "sZeroRecords": "No se encontraron resultados",
	    "sEmptyTable": "Ningún dato disponible en esta tabla",
	    "sInfo": "Mostrando registros del _START_ al _END_",
	    "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0",
	    "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
	    "sInfoPostFix": "",
	    "sSearch": "Buscar:",
	    "sUrl": "",
	    "sInfoThousands": ",",
	    "sLoadingRecords": "Cargando...",
	    "oPaginate": {
	      "sFirst": "Primero",
	      "sLast": "Último",
	      "sNext": "Siguiente",
	      "sPrevious": "Anterior"
	    },
	    "oAria": {
	      "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
	      "sSortDescending": ": Activar para ordenar la columna de manera descendente"
	    }

  	}

});

tablaMascotas.on('order.dt search.dt', function(){

	tablaMascotas.column(0, {search:'applied', order:'applied'}).nodes().each(function(cell, i){ cell.innerHTML = i+1})


}).draw();

