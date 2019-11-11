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
$sql = "INSERT INTO genres (genreid, genrename, slug) VALUES ('{$_POST['id']}', '{$_POST['genreName']}', '{$_POST['slug']}')";

mysqli_query($conexion, $sql);
mysqli_close($conexion);


?>