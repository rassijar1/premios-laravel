<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\premios;
use App\Models\Administradores;
class PremiosController extends Controller
{
    

public function index(){

$json = file_get_contents('https://www.anapioficeandfire.com/api/characters');

// Decodificar el JSON en un arreglo asociativo
$data = json_decode($json, true);
//echo '<pre>'; print_r($data); echo '</pre>';
//return;


// Generar las filas de la tabla con los datos del JSON
$rows = [];
$conta=1;
foreach ($data as $item) {
    $aliases = "";
foreach ($item["aliases"] as $alias) {
$aliases .= $alias.", ";
}
    $rows[] = [
        "id"=>$conta++,
        "url" => $item["url"],
        "gender" => $item["gender"],
        "culture" => $item["culture"],
        "aliases" => rtrim($aliases, ", ")    
    ];
    
}

// Crear la DataTable con los datos del JSON
if (request()->ajax()) {
    return datatables()->of($rows)
     ->addColumn('id_premio', function($data){

             return $data['id'];

            })

     ->addColumn('url_premio', function($data){

              return $data['url'];

            })



     ->addColumn('genero', function($data){

              return $data['gender'];

            })

     ->addColumn('cultura', function($data){

              if ($data['culture']==""){

                  return '<button type="button" class="btn btn-xs btn-primary" disabled>Sin cultura </button>';
              }else{
                return $data['culture'];
              }
            })
     ->addColumn('aliado', function($data){

              return $data['aliases'];

            })
        ->addColumn('acciones', function($data) {
            return '<div class="btn-group"> 
                
               <button class="btn btn-success btn-sm" data-toggle="modal" data-target="#crearPremio"><i class="fas fa-chess-queen">&nbsp&nbsp</i>Obtener Premio</button>
            </div>';
        })
        ->rawColumns(['cultura','acciones'])
        ->make(true);
} 
$administradores = Administradores::all();
// Enviar la vista con la tabla
return view("paginas.premios", ["data" => $data, "administradores"=>$administradores]);


}



/*=============================================
	Crear una mascota
	=============================================*/

	public function store(Request $request){

		//recoger datos


		$datos=array("nombre" => $request->input("nombre"), 
			         "direccion" => $request->input("direccion"),
			         "telefono" => $request->input("telefono"),
                     "correo" => $request->input("correo")
			        




	);

		// Validar datos
    	if(!empty($datos)){

    		$validar = \Validator::make($datos,[

    			"nombre"=> "required|regex:/^[0-9a-zA-ZñÑáéíóúÁÉÍÓÚ ]+$/i",
    			"direccion"=> "required|regex:/^[0-9a-zA-ZñÑáéíóúÁÉÍÓÚ ]+$/i",
    			"correo"=> 'required|regex:/^[,\\0-9a-zA-ZñÑáéíóúÁÉÍÓÚ ]+$/i'
    			
    		]);



    		//Guardar categoría
    	
                $premios = new premios();
                $premios->nombre = $datos["nombre"];
                $premios->direccion = $datos["direccion"];
                $premios->telefono = $datos["telefono"];
                $premios->correo = $datos["correo"];

                $premios->save(); 

                return redirect("/premios")->with("ok-crear", "");   


    		


    	}else{

    		return redirect("/premio")->with("error", "");
    	}




	}



    /*=============================================
    Mostrar una sola mascota
    =============================================*/

    public function show($id){   

        $pets = Pets::where('id_mascota', $id)->get();
        $administradores = Administradores::all();
		$TypePet= TypePet::all();
        if(count($pets) != 0){

            return view("paginas.pets", array("status"=>200, "pets"=>$pets, "TypePet"=>$TypePet, "administradores"=>$administradores)); 
        }

        else{
            
            return view("paginas.categorias", array("status"=>404, "pets"=>$pets, "TypePet"=>$TypePet, "administradores"=>$administradores));

        }

    }

     /*=============================================
    Editar una mascota
    =============================================*/

    public function update($id, Request $request){

        // Recoger los datos

         $datos=array("id_tipomascota_fk" => $request->input("tipo_mascota_edit"), 
			         "nombre" => $request->input("nombre_mascota_edit"),
			         "id_cliente_fk" => $request->input("cliente_mascota_edit")
			        




	);

      
        // Validar los datos

        if(!empty($datos)){

           $validar = \Validator::make($datos,[

    			"id_tipomascota_fk"=> "required|",
    			"nombre"=> "required|",
    			"id_cliente_fk"=> 'required|'
    			
    		]);


           

            if($validar->fails()){

                return redirect("/pets")->with("no-validacion", "");

            }else{


                $datos = array("id_tipomascota_fk" => $datos["id_tipomascota_fk"],
                                "nombre" => $datos["nombre"],
                                "id_cliente_fk" => $datos["id_cliente_fk"]
                                );

                $categoria = Pets::where('id_mascota', $id)->update($datos); 

                return redirect("/pets")->with("ok-editar1", "");

            }

        }else{

           return redirect("/pets")->with("error", ""); 

        }


    }

     /*=============================================
    Eliminar un registro
    =============================================*/

    public function destroy($id, Request $request){ 

        $validar = Pets::where("id_mascota", $id)->get();
        
        if(!empty($validar)){

            

            $pets = Pets::where("id_mascota",$validar[0]["id_mascota"])->delete();

            //Responder al AJAX de JS
            return "ok";
        
        }else{

            return redirect("/pets")->with("no-borrar", "");   

        }

    }

}


