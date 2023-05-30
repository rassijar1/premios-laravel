Sistema veterinario de citas

Este proyecto está basado en la plantilla de administración de Admin LTE3

1 Paso.

 Dar clic en Code y luego en Donwload zip Crear una carpeta, luego van a copiar el proyecto a htdocs y abren el cmd con la ruta del proyecto.
( 1.png)
--
2 paso.

van a ejecutar las migraciones del proyecto con el siguiente comando:

-php artisan migrate

y les debe salir las siguientes tablas
( 2.png)
--
3 paso

Como no tienen registrado el usuario en la base de datos que es el que va a hacer el registro es necesario instalar el node js y colocar las siguientes lineas en la carpeta del proyecto:

npm i
npm run dev


4 paso 

se van a http://localhost/veterinaria/public/login
( 3.png)
--
para que aparezca el enlace de register tienen que cambiar esta linea del registercontroller

 public function __construct()
    {
        $this->middleware('auth');
		se cambia 'auth' por 'guest'
    }
( 4.png)
--
5 paso 
y ya podran ir a http://localhost/veterinaria/public/register 

( 5.png)
--
Despues de esto en el mismo register controller deben quitar las siguientes lineas de codigo

protected function create(array $data)
    {


        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
            'doc_identidad'=> $data['doc_identidad'],
            'num_cel'=> $data['num_cel'],

        ]);

( 6.png)
--

6 paso

deben quitar doc_identidad y num_cel para hacer el registro. Despues de hacer el registro, cierran la sesion y detienen el npm con la tecla q. y vuelven a poner los campos de doc_identidad y num_cel.


7 paso

Ahora ya se puede ingresar a la ventana del sistema con el usuario y contraseña creados, ya es posible loguearse entonces una vez logueados con usuario y contraseña podemos entrar a los modulos del sistema que son los de clientes, mascotas, citas y calendario. El sistema de clientes tiene su respectivo crud, al igual que las mascotas y las citas. pero la diferencia es que las citas tienen mas validaciones como buscar rangos de fechas espeficicas que tienen citas y que al momento de crear una cita con horario y hora iguales no los va a dejar hacerlo. Finalmente se implemento el plugin full calendar que la finalidad de hacerlo es que las citas ingresadas se plasmen en  dicho calendario.

Nota: las imagenes que estan nombradas con parentesis iran en una carpeta llamada autenticacion img.

El modulo de clientes cuenta con una inferfaz de una datatable que tiene un boton para crear cliente, uno para editar y uno para eliminar.

El modulo de mascotas cuenta con una inferfaz de una datatable que tiene un boton para crear mascota, uno para editar y uno para eliminar.

El modulo de citas cuenta con una inferfaz de una datatable que tiene un boton para crear cliente, uno para editar y uno para eliminar. aparte de eso tiene unas cajas de texto que sirven para buscar fechas y acorde a ese filtro se va mostrando los resultados.

-Finalmene, El modulo de calendario cuenta con una inferfaz que permite mostrar las citas ingresadas en el modulo de citas con la hora y titulo de la cita en especifico y pudiendo filtrar por semana, mes y dia.
