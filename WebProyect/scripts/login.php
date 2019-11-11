<?php
include "db.php";
include "sessionManager.php";
//Response
$ok = true;
$mensaje = '';

//Sentencia SQL
$sql = "SELECT username, passwd FROM usuarios WHERE username = '{$_POST['username']}' AND passwd = '{$_POST['passwd']}' ";
$resultado = ConsultaSQL($sql);

if(count($resultado)>0){
	startSession("user",$_POST['username']);//Iniciamos Session
	$mensaje = '../pages/catalogue.html';
} else {
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