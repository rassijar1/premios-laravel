	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		
	</head><meta http-equiv="X-UA-Compatible" content="IE=edge">
		<title>Premios</title>
	<meta http-equiv="Expires" content="0">
	<meta http-equiv="Last-Modified" content="0">
	<meta http-equiv="Cache-Control" content="no-cache, mustrevalidate">
	<meta http-equiv="Pragma" content="no-cache">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<link rel="icon" href="{{url('/')}}/img/premio.png">
	<!--=====================================
		PLUGINS DE CSS
		======================================-->
			 <!-- Datepicker -->
	    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
		{{-- datetimepicker --}}
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css">
		{{-- BOOTSTRAP 4 --}}
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">

		{{-- OverlayScrollbars.min.css --}}
		<link rel="stylesheet" href="{{ url('/') }}/css/plugins/OverlayScrollbars.min.css">

		{{-- TAGS INPUT --}}
		<link rel="stylesheet" href="{{ url('/') }}/css/plugins/tagsinput.css">

		{{-- SUMMERNOTE --}}
		<link rel="stylesheet" href="{{ url('/') }}/css/plugins/summernote.css">


	    {{-- NOTIE --}}
		<link rel="stylesheet" href="{{ url('/') }}/css/plugins/notie.css">
		<!-- DataTables -->
		<link rel="stylesheet" href="{{ url('/') }}/css/plugins/dataTables.bootstrap4.min.css">	
		<link rel="stylesheet" href="{{ url('/') }}/css/plugins/responsive.bootstrap.min.css">

		{{-- CSS AdminLTE --}}
		<link rel="stylesheet" href="{{ url('/') }}/css/plugins/adminlte.min.css">

		
<!-- datatables fitrar fecha -->
<link rel="stylesheet" href="https://cdn.datatables.net/datetime/1.3.1/css/dataTables.dateTime.min.css">
		{{-- google fonts --}}
		<link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet">
	
		{{-- full calendar --}}
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.9.0/fullcalendar.css" />
{{-- Selectize --}}
<link href="
https://cdn.jsdelivr.net/npm/selectize-bootstrap4-theme@2.0.2/dist/css/selectize.bootstrap4.min.css
" rel="stylesheet">
		<!--=====================================
		PLUGINS DE JS
		======================================-->

		{{-- Fontawesome --}}
		<script src="https://kit.fontawesome.com/e632f1f723.js" crossorigin="anonymous"></script>

		<!-- jQuery library -->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

		<!-- Popper JS -->
		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>

		<!-- Latest compiled JavaScript -->
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>

		{{-- jquery.overlayScrollbars.min.js --}}
		<script src="{{ url('/') }}/js/plugins/jquery.overlayScrollbars.min.js"></script>

		{{-- TAGS INPUT --}}
		{{-- https://www.jqueryscript.net/form/Bootstrap-4-Tag-Input-Plugin-jQuery.html --}}
		<script src="{{ url('/') }}/js/plugins/tagsinput.js"></script>

		{{-- SUMMERNOTE --}}
		{{-- https://summernote.org/ --}}
		<script src="{{ url('/') }}/js/plugins/summernote.js"></script>

		{{-- NOTIE --}}
		{{-- https://github.com/jaredreich/notie --}}
		<script src="{{ url('/') }}/js/plugins/notie.js"></script>

		{{-- JS AdminLTE --}}
		<script src="{{ url('/') }}/js/plugins/adminlte.js"></script>

		{{-- SWEET ALERT --}}
		{{-- https://sweetalert2.github.io/ --}}
		<script src="{{ url('/') }}/js/plugins/sweetalert.js"></script>

		<!-- DataTables 
		https://datatables.net/-->
		<script src="{{ url('/') }}/js/plugins/jquery.dataTables.min.js"></script>
		<script src="{{ url('/') }}/js/plugins/dataTables.bootstrap4.min.js"></script> 
		<script src="{{ url('/') }}/js/plugins/dataTables.responsive.min.js"></script>
		<script src="{{ url('/') }}/js/plugins/responsive.bootstrap.min.js"></script>
		{{-- moment --}}

		<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
		{{-- datetimepicker --}}
		<script src="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.min.js"></script>
 <!-- Datepicker -->
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
 

<!-- datatables fitrar fecha -->


<script src="https://cdn.datatables.net/datetime/1.3.1/js/dataTables.dateTime.min.js"></script>

	{{-- full calendar --}}
    <script src="https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.9.0/fullcalendar.js"></script>
   <script src='https://fullcalendar.io/releases/fullcalendar/3.10.0/locale/es.js'></script>	
{{-- Selectize --}}
<script src="https://cdnjs.cloudflare.com/ajax/libs/selectize.js/0.15.2/js/selectize.min.js"></script>



	@if (Route::has('login'))

	@auth
	<script>

	if(localStorage.getItem('back')){
	window.history.forward();
	window.onload = window.history.forward();
	window.onpageshow = function(evt) { if (evt.persisted) window.history.forward(); }
	window.onunload = function() { void (0) }

	}	
		
	</script>
	<body class="hold-transition sidebar-mini layout-fixed">

		<div class="wrapper">

			@include('modulos.header')

			@include('modulos.sidebar')

			@yield('content')

			@include('modulos.footer')


		</div>

	<input type="hidden" id="ruta" value="{{url('/')}}">

	<script src="{{url('/')}}/js/codigo.js"></script>
	<script src="{{url('/')}}/js/administradores.js"></script>
	<script src="{{url('/')}}/js/premios.js"></script>
	<script>
		localStorage.removeItem('back');
		//localStorage.setItem('back', 'back2');
	</script>

	</body>

	@else

	@include('paginas.login')



	@endauth

	@endif	
	</html>