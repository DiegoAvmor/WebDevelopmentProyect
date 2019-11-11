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
$sql = "INSERT INTO videogame ( ClvJuego, NombreJuego , FLanzamiento , Rating , RatingTop , PlayTime , imagen , descripcion ) VALUES ('{$_POST['id']}', '{$_POST['gameName']}', '{$_POST['released']}', '{$_POST['rating']}', '{$_POST['rating_top']}', '{$_POST['playtime']}', '{$_POST['imageURL']}', '{$_POST['descrip']}')";

mysqli_query($conexion, $sql);
mysqli_close($conexion);


?>