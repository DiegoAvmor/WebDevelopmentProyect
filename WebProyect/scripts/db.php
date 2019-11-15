<?php

function EjecutarSQL($sentenciaSQL){//Crear,Actualizar,Eliminar Datos
    
    $conexion = connectMysqli();
    if (!$conexion) {
        die("Fallo: " . mysqli_connect_error());//Die es igual al exit
    }

    mysqli_query($conexion, $sentenciaSQL);
    mysqli_close($conexion);
};

function ConsultaSQL($sentenciaSQL){//Obtencion de datos
    
    $conexion = connectMysqli();
	if (!$conexion) {
    	die("Fallo: " . mysqli_connect_error());
	}

    $resultado = mysqli_query($conexion, $sentenciaSQL);
    
	for ($registros = array (); $fila = mysqli_fetch_assoc($resultado); $registros[] = $fila);	
	mysqli_close($conexion);
	return $registros;
};



function connectMysqli(){
    $jsonStr = file_get_contents("config.json");
    $config = json_decode($jsonStr);
    $connection = mysqli_connect(
        $config->database->host, 
        $config->database->user, 
        $config->database->password,
        $config->database->dbname
        );
    return $connection;
}