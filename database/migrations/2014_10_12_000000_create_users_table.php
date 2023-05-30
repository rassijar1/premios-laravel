<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {


         Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->string('foto',250)->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('doc_identidad')->nullable();
            $table->string('num_cel')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });

        Schema::create('usuario_premio', function (Blueprint $table) {
            $table->increments('id_usuario_premio', true)->unsigned();
            $table->string('nombre',250);
            $table->string('direccion',250);
            $table->string('telefono',250);
            $table->string('correo',250);
            $table->timestamps();
            $table->engine = 'InnoDB';
        });
        
       
        
       
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
