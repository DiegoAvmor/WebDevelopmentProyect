<?php
$servidor = "localhost";
$usuario = "root";
$contrasena = "123456";//Este puede cambiar con los suyos, busquen cual contraseña tiene por default para root
$basedatos = "videogameswebservice";//Deben de tener ustedes la BD 

//Response
$ok = true;
$mensaje = '';

$conexion = mysqli_connect($servidor, $usuario, $contrasena, $basedatos);
if (!$conexion) {
    die("Fallo: " . mysqli_connect_error());
}

//Sentencia SQL
$sql = "SELECT username, passwd FROM usuarios WHERE username = '{$_POST['username']}' AND passwd = '{$_POST['passwd']}' ";

$resultado = mysqli_query($conexion, $sql);
mysqli_close($conexion);

if (mysqli_num_rows($resultado) > 0) {
	$mensaje = '../pages/signUp.html';
	//header("location: ../pages/signup.html");
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