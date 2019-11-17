<?php
//This file just emulates the functionality of adding a review into de db

include "db.php";
include "sanitizeValidate.php";

//HTTP POST Info
$username = cleanVariable($_POST['username']);
$date = date("Y-m-d");
$gameid = cleanVariable($_POST['gameid']);
$title = cleanVariable($_POST['title']); //No se usara por el momento
$review = cleanVariable($_POST['review']); //la tomaremos como descripcion
$rating = cleanVariable($_POST['rating']);

//Response
$ok = true;
$message = '';

$isAvailable = "SELECT username, fecha, gameid FROM reviews WHERE username = '{$username}' AND fecha = '{$date}' AND  gameid = '{$gameid}'";
$result = ConsultaSQL($isAvailable);

if(sizeof($result)<= 0){
	$sql = "INSERT INTO reviews (username, fecha, gameid, descripcion, calificacion, calificacionTop) VALUES ('{$username}', '{$date}', '{$gameid}', '{$review}', '{$rating}', '5')";
	EjecutarSQL($sql);
	$message = 'Success';
}else {
	$ok = false;
	$message = 'Solo puedes agregar una review al juego por dia';
}

//Respuesta en formato json

echo json_encode(
	array(
		'ok' => $ok,
		'message' => $message
	)
);
?>