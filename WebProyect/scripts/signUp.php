<?php
include "db.php";
include "sanitizeValidate.php";

//HTTP POST Info
$username = cleanVariable($_POST['userName']);
$passwd = cleanVariable($_POST['pass']);
$email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
//Response
$ok = true;
$message = '';

//Sentencia para la conexion de la base de datos
$conection = connectMysqli();

//Verificamos que no hubiera problema en la conexion
if (!$conection) {
    die( "Fallo: ".mysqli_connect_error());
}

$isAvailable = "SELECT username, passwd FROM usuarios WHERE username = '{$username}' OR email = '{$email}' ";
$result = mysqli_query($conection, $isAvailable);

if(mysqli_num_rows($result) <= 0){
	$sql = "INSERT INTO usuarios (username, email, passwd) VALUES ('{$username}', '{$email}', '{$passwd}')";
	if (mysqli_query($conection, $sql)) {
		$message = '../pages/login.html';
	} 
}else {
	$ok = false;
	$message = 'Usuario o correo ya utilizados';
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