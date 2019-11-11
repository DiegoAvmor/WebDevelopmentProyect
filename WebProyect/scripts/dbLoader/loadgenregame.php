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
$sql = "INSERT INTO games_genres ( gameid , genreid ) VALUES ('{$_POST['gameID']}', '{$_POST['genreID']}')";

mysqli_query($conexion, $sql);
mysqli_close($conexion);


?>