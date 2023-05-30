var page;

/*=============================================
 Validamos tabla de administradores
=============================================*/ 

if($(".tableAdmins").length > 0){

  //console.log("tabla admins");
 var url = "ajax/data-admins.php?text="+text+"&between1="+$("#between1").val()+"&between2="+$("#between2").val()+"&token="+localStorage.getItem("token_user");

var columns = [
        {"data":"id"},
        {"data":"id_user"},
        {"data":"student_code_user"},
        {"data":"email_user"},
        {"data":"name_user"},
        {"data":"sumames_user"},
        {"data":"nick_name_user"},
        {"data":"vehicle1_user"},
        {"data":"date_created_user"},
        //{"data":"actions" }
        {"data":"actions", "orderable": false }

  ];

    page = "admins";

}

/*=============================================
 Validamos tabla de usuarios
=============================================*/ 

if($(".tableUsers").length > 0){

    //console.log("tabla users");
 var url = "ajax/data-users.php?text="+text+"&between1="+$("#between1").val()+"&between2="+$("#between2").val()+"&token="+localStorage.getItem("token_user");

var columns = [
        {"data":"id"},
        {"data":"id_user"},
        {"data":"student_code_user"},
        {"data":"email_user"},
        {"data":"name_user"},
        {"data":"sumames_user"},
        {"data":"nick_name_user"},
        {"data":"vehicle1_user"},
        {"data":"date_created_user"},
        
        
  ];

      page = "users";


}


/*=============================================
Ejecutamos DataTable
=============================================*/ 

var text = "html";

  function execDatatable(text, url, columns) {

   
    //var text ="flat";
     //var text ="html";



//return;


    var adminsTable= $("#adminsTable").DataTable({
      "responsive": true,
      "lengthChange": true,
      "aLengthMenu":[[10, 50, 100, 500, 1000],[10, 50, 100, 500, 1000]],
      "autoWidth": true,
      "processing":true,
      "serverSide":true,
      "order":[[0,"desc"]],

      "ajax":{

      	"url": url,
      	"type":"POST"

      },
      "columns":columns,

        "language": {

       "sProcessing":     "Procesando...",
       "sLengthMenu":     "Mostrar _MENU_ registros",
       "sZeroRecords":    "No se encontraron resultados",
       "sEmptyTable":     "Ningún dato disponible en esta tabla",
       "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_",
       "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0",
       "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
       "sInfoPostFix":    "",
       "sSearch":         "Buscar:",
       "sUrl":            "",
       "sInfoThousands":  ",",
       "sLoadingRecords": "Cargando...",
       "oPaginate": {
         "sFirst":    "Primero",
         "sLast":     "Último",
         "sNext":     "Siguiente",
         "sPrevious": "Anterior"

       },
       "oAria": {
         "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
         "sSortDescending": ": Activar para ordenar la columna de manera descendente"
       }

     },
        


      "buttons": [ 
      
      {extend:"copy",text:'<i class="fa fa-copy"></i>&nbsp;&nbsp;Copiar',titleAttr:"Copiar",className:"btn-dark"},
      {extend:"csv",text:'<i class="fa fa-file-csv"></i>&nbsp;&nbsp;CSV',titleAttr:"Descargar CSV",className:"btn-dark"},
      {extend:"excel",text:'<i class="fa fa-file-excel"></i>&nbsp;&nbsp;Excel',titleAttr:"Exportar a excel",className:"btn-dark"},
      {extend:"pdf",text:'<i class="fa fa-file-pdf"></i>&nbsp;&nbsp;PDF',titleAttr:"Exportar a PDF",className:"btn-dark"},
      {extend:"print",text:'<i class="fa fa-print"></i>&nbsp;&nbsp; Imprimir',titleAttr:"Imprimir",className:"btn-dark"},
      {extend:"colvis",text:'Filtrar por',titleAttr:"Filtrar por",className:"btn-dark"}



      ],
      fnDrawCallback:function(oSettings){
      if(oSettings.aoData.length == 0){
          $('.dataTables_paginate').hide();
          $('.dataTables_info').hide();
      }

    }


    })

    if (text == "flat") {

    //disparar la tabla y hacer que carguen los botones
$("#adminsTable").on("draw.dt", function(){

  setTimeout(function(){

  adminsTable.buttons().container().appendTo('#adminsTable_wrapper .col-md-6:eq(0)');   

  },100)


  }) 

    }
    
  };


/*=============================================
 Ejecutar reporte
=============================================*/




function ReportActive(event){

//console.log("event",event);
if(event.target.checked){

$("#adminsTable").dataTable().fnClearTable();
$("#adminsTable").dataTable().fnDestroy();

  setTimeout(function(){


  execDatatable("flat", url, columns);

  },100)
}
else{

$("#adminsTable").dataTable().fnClearTable();
$("#adminsTable").dataTable().fnDestroy();

setTimeout(function(){


execDatatable("html",url, columns);

  },100)

}


}


/*=============================================
    Rango de fechas  
    =============================================*/
    
    
    
    
        $('#daterange-btn').daterangepicker(
      {
      "locale": {
       "format": "YYYY-MM-DD",
       "separator": " - ",
       "applyLabel": "Aplicar",
       "cancelLabel": "Cancelar",
       "fromLabel": "Desde",
       "toLabel": "Hasta",
       "customRangeLabel": "Rango Personalizado",
       "daysOfWeek": [
           "Do",
           "Lu",
           "Ma",
           "Mi",
           "Ju",
           "Vi",
           "Sa"
       ],
       "monthNames": [
           "Enero",
           "Febrero",
           "Marzo",
           "Abril",
           "Mayo",
           "Junio",
           "Julio",
           "Agosto",
           "Septiembre",
           "Octubre",
           "Noviembre",
           "Diciembre"
       ],
       "firstDay": 1
     },
     ranges   : {
       'Hoy'       : [moment(), moment()],
       'Ayer'   : [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
       'Últimos 7 días' : [moment().subtract(6, 'days'), moment()],
       'Últimos 30 días': [moment().subtract(29, 'days'), moment()],
       'Este Mes'  : [moment().startOf('month'), moment().endOf('month')],
       'Último Mes'  : [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
       'Este Año': [moment().startOf('year'), moment().endOf('year')],
       'Último Año'  : [moment().subtract(1, 'year').startOf('year'), moment().subtract(1, 'year').endOf('year')],
     },
        /*ranges   : {
          'Today'       : [moment(), moment()],
          'Yesterday'   : [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
          'Last 7 Days' : [moment().subtract(6, 'days'), moment()],
          'Last 30 Days': [moment().subtract(29, 'days'), moment()],
          'This Month'  : [moment().startOf('month'), moment().endOf('month')],
          'Last Month'  : [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        },*/
        startDate: moment($("#between1").val()),
        endDate  : moment($("#between2").val()),
      },
      function (start, end) {
        
        //console.log("start", start);
       // console.log("end", end);
        $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'))

          window.location=page+"?start="+start.format('YYYY-MM-DD')+"&end="+end.format('YYYY-MM-DD');

      },
     
    )


/*=============================================
Eliminar registro
=============================================*/

$(document).on("click",".removeItem",function(){

    var idItem = $(this).attr("idItem");
    //console.log("idItem", idItem);
    var table = $(this).attr("table");
    //console.log("table", table);
    var suffix = $(this).attr("suffix");
   // console.log("suffix", suffix);
    //var deleteFile = $(this).attr("deleteFile");
    var page = $(this).attr("page");
    //console.log("page", page);    

    fncSweetAlert("confirm","Esta seguro de borrar el registro?","").then(resp=>{

      if(resp){

        var data = new FormData();
        data.append("idItem", idItem);
        data.append("table", table);
        data.append("suffix", suffix);
        data.append("token", localStorage.getItem("token_user"));
        //data.append("deleteFile", deleteFile);

        $.ajax({  

          url: "ajax/ajax-delete.php",
          method: "POST",
          data: data,
          contentType: false,
          cache: false,
          processData: false,
          success: function (response){   
            //console.log("response", response);
           
           if(response == 200){
           

                fncSweetAlert(
                  "success",
                  "El registro ha sido borrado",
                  "/"+page
                );

            }else{

              fncNotie(3, "Error al eliminar el registro");

            }

                

            

          }

        })

      }

    })
})        