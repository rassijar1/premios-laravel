@extends('plantilla')
@section('content')

<div class="content-wrapper" style="min-height: 247px;">
  <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
               <h1>Premios Game of Thrones API</h1>

          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Inicio</a></li>
              <li class="breadcrumb-item"><a href="#">Premios</a></li>
            </ol>
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>
<section class="content">

      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <!-- Default box -->
            <div class="card card-primary card-outline">
              <div class="card-header">
                
                

              </div>
              <div class="card-body">
                {{-- @foreach ($categorias as $element)
                  {{$element}}
                @--}}

                <table class="table table-bordered table-striped dt-responsive" id="tablaPremios" width="100%">
                  
                  <thead>
                    <tr>
                      
                      <th width="10px">#</th>
                      <th width="40px">URL Premio</th>
                      <th width="30px">Genero</th>
                       <th width="30px">Cultura</th>
                      <th width="30px">Alias</th>
                      <th width="50px">Acciones</th>
                    </tr>

                  </thead>

                    <tbody>
                      


                    </tbody>


                </table>
              </div>
              <!-- /.card-body -->
              
            </div>
            <!-- /.card -->
          </div>
        </div>
      </div>
    </section>
</div>
<!--=====================================
Crear Premio
======================================-->

<div class="modal" id="crearPremio">
 
  <div class="modal-dialog">
   
    <div class="modal-content">

      <form method="POST" action="{{url('/')}}/premios" enctype="multipart/form-data">
        @csrf
      
        <div class="modal-header bg-info">
          
          <h4 class="modal-title">Registrar Premio</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>

        </div>

        <div class="modal-body">

           
  

            {{-- Nombre premio --}}

            <div class="input-group mb-3">
              
              <div class="input-group-append input-group-text">               
                 <i class="fas fa-user"></i>
              </div>
  <input  type="text" class="form-control" name="nombre" value="{{ old('nombres') }}" placeholder="Ingrese el nombre" maxlength="30">


            </div>

         
                
				<div class="input-group mb-3">
                    
                    <div class="input-group-append input-group-text">
                      <i class="fas fa-home"></i>
                    </div>

                      <input  type="text" class="form-control" name="direccion" value="{{ old('direccion') }}" placeholder="Ingrese la direccion" maxlength="30">
                  </div>

                  <div class="input-group mb-3">
              
              <div class="input-group-append input-group-text">               
                 <i class="fas fa-phone"></i>
              </div>
  <input  type="number" class="form-control" name="telefono" value="{{ old('telefono') }}" placeholder="Ingrese telefono" maxlength="30">


            </div>

            <div class="input-group mb-3">
              
              <div class="input-group-append input-group-text">               
                 <i class="fas fa-envelope"></i>
              </div>
  <input  type="email" class="form-control" name="correo" value="{{ old('correo') }}" placeholder="Ingrese correo" maxlength="30">


            </div>
           


        </div>

        <div class="modal-footer d-flex justify-content-between">
          
          <div>
            <button type="button" class="btn btn-dark" data-dismiss="modal">Cerrar</button>
          </div>

          <div>
            <button type="submit" class="btn btn-primary">Registrar</button>
          </div>

        </div>

      </form>

    </div> 

  </div> 

</div>


@if (Session::has("ok-crear"))

  <script>
      notie.alert({ type: 1, text: '¡El Registro ha sido creado correctamente!', time: 10 })
 </script>

@endif

 @if (Session::has("no-validacion"))

<script>
    notie.alert({ type: 2, text: '¡Hay campos no válidos en el formulario!', time: 10 })
</script>

@endif

 @if (Session::has("error"))

<script>
    notie.alert({ type: 3, text: '¡Error en el gestor premios!', time: 10 })
</script>

@endif

    @endsection

    