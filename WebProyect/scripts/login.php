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
$sql = "SELECT username, passwd FROM usuarios WHERE username = '{$_POST['username']}' AND passwd = '{$_POST['passwd']}' ";

$resultado = mysqli_query($conexion, $sql);
mysqli_close($conexion);

if (mysqli_num_rows($resultado) > 0) {
	$mensaje = '../pages/signUp.html';
} else {
	$ok = false;
	$mensaje = 'Usuario o Contraseña incorrecta';
	//header("location: ../pages/login.html");
}

//Respuesta en formato json
echo json_encode(
	array(
		'ok' => $ok,
		'mensaje' => $mensaje
	)
);

//echo date("jS F, Y", strtotime("11-12-10"));
// outputs 11th December, 2010 
?>