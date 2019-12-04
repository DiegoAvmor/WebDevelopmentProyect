<?php
include "sanitizeValidate.php";


session_start();
$ok = false;//Asumimos que no tiene acceso
$mensaje = '../pages/login.html';


if(isset($_SESSION['status']) && isset($_REQUEST['id'])){
    $id = cleanVariable($_REQUEST['id']); //Lo limpiamos para evitar acceso por cross scripting o SQL injection
    if($_SESSION['status'] == TRUE && ($_SESSION['user'] == $id) ){
        $ok = true;
        $mensaje = "Welcome Back ".$id."!";
    }
}

echo json_encode(
	array(
		'ok' => $ok,
		'mensaje' => $mensaje
	)
);


?>