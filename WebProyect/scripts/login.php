<?php
include "db.php";
include "sanitizeValidate.php";

//HTTP POST INFO
$username = cleanVariable($_POST['username']);
$passwd = cleanVariable($_POST['passwd']);
//Response
$ok = true;
$mensaje = '';

//Sentencia SQL
$sql = "SELECT username FROM usuarios WHERE username = '{$username}' AND passwd = '{$passwd}' ";
$resultado = ConsultaSQL($sql);
if(session_status() == PHP_SESSION_ACTIVE ){
	session_destroy();
}else{
	session_start();
}
if(count($resultado)>0){
	$_SESSION["status"] = true;
	$_SESSION["user"] = $username;
	$mensaje = '../pages/catalogue.html?id='.$username;
} else {
	$_SESSION["status"] = false;
	$ok = false;
	$mensaje = 'Usuario o Contraseña incorrecta';
}

//Respuesta en formato json
echo json_encode(
	array(
		'ok' => $ok,
		'mensaje' => $mensaje
	)
);

?>