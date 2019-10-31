<?php
$servidor = "localhost";
$usuario = "root";
$contrasena = "123456";//Este puede cambiar con los suyos, busquen cual contraseña tiene por default para root
$basedatos = "videogameswebservice";//Deben de tener ustedes la BD 

$conexion = mysqli_connect($servidor, $usuario, $contrasena, $basedatos);
if (!$conexion) {
    die("Fallo: " . mysqli_connect_error());
}

$sql = "SELECT username, passwd FROM usuarios WHERE username = '{$_GET['username']}' AND passwd = '{$_GET['passwd']}' ";

$resultado = mysqli_query($conexion, $sql);
mysqli_close($conexion);

if (mysqli_num_rows($resultado) > 0) {
	//Si hay registro reenviar a la página menu.php
	header("location: ../pages/signup.html");
} else {
	//Sino redirigir a la página index.html 
	header("location: ../pages/login.html");
}
//echo date("jS F, Y", strtotime("11-12-10"));
// outputs 11th December, 2010 
?>