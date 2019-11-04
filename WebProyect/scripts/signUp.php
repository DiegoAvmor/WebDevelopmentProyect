<?php
//Datos necesarios para establecer la conexion con la base de datos
$server = "127.0.0.1";
$username = "carlos";
$password = "";
$database = "videogameswebservice";

//Response
$ok = true;
$message = '';

//Sentencia para la conexion de la base de datos
$conection = mysqli_connect($server, $username, $password, $database);

//Verificamos que no hubiera problema en la conexion
if (!$conection) {
    die( "Fallo: ".mysqli_connect_error());
}

$isAvailable = "SELECT username, passwd FROM usuarios WHERE username = '{$_POST['userName']}' OR email = '{$_POST['email']}' ";
$result = mysqli_query($conection, $isAvailable);

if(mysqli_num_rows($result) <= 0){
	$sql = "INSERT INTO usuarios (username, email, passwd)
	VALUES ('{$_POST['userName']}', '{$_POST['email']}', '{$_POST['pass']}')";
	if (mysqli_query($conection, $sql)) {
		$message = '../pages/login.html';
	} 
}else {
	$ok = false;
	$message = 'Usuario o contraseña ya utilizados';
}

//Terminamos la conexion con la base de datos
mysqli_close($conection);

//Respuesta en formato JSON
echo json_encode(
	array(
		'ok' => $ok,
		'message' => $message
	)
);
//En esto de php faltaria verificar que el usuario que se intenta agregar no exista en la bd
?>