<?php
include "db.php";
//Response
$ok = true;
$mensaje = '';

$conexion = connectMysqli();
if (!$conexion) {
    die("Fallo: " . mysqli_connect_error());
}

//Sentencia SQL
$sql = "INSERT INTO videogame ( ClvJuego, NombreJuego , FLanzamiento , Rating , RatingTop , TotalRating , PlayTime ) VALUES ('{$_POST['id']}', '{$_POST['gameName']}', '{$_POST['released']}', '{$_POST['rating']}', '{$_POST['rating_top']}', '{$_POST['ratings_count']}', '{$_POST['playtime']}')";

$resultado = mysqli_query($conexion, $sql);
mysqli_close($conexion);

if (mysqli_num_rows($resultado) > 0) {
	$mensaje = '../pages/signUp.html';
} else {
	$ok = false;
	$mensaje = 'Usuario o Contraseña incorrecta';
	//header("location: ../pages/login.html");
}


?>