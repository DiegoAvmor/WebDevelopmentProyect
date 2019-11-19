<?php
include "db.php";

//Variables globales, para acceder o cambiar hay que hacer uso de $GLOBALS['myVarGlobal']
session_start();
$user = $_SESSION['user'];//Para este punto ya debe de existir una session, asi que no validamos
$action = $_REQUEST['action'];
$_UPDATE = 2;
$_DELETE = 1;
$_ADD = 0;


//Respuesta del servidor;
$ok = true;
$mensaje = "";

//Evaluacion de la accion
switch ($action) {
    case "user_data":
        manageUser();
        break;
    case 'user_fav':
        manageFavorites();
        break;
    case 'game_review':
        manageGameReviews();
        break;
    default:
        $ok = false;
        $mensaje = 'opcion no definida';
        break;
}

//Se envia la respuesta
echo json_encode(
    array(
        'ok' => $ok,
        'mensaje' => $mensaje
    )
);

//Funciones//

/*
?action = user_data
Metodo GET => Obtencion de datos del usuario [nombre de Usuario, contraseña,Correo]
Metodo PUT => Actualizacion de los datos del usuario
Metodo DELETE => Eliminacion de la BD
*/
function manageUser(){
    $username = $GLOBALS['user'];
    //Esta pidiendo informacion del usuario
    if($_SERVER['REQUEST_METHOD'] === 'GET'){
        $sql = "SELECT username, email , passwd FROM usuarios WHERE username = '{$username}'";
        $resultado = ConsultaSQL($sql);
        if(count($resultado) == 1){//Se encontro asi que le mandamos la informacion
            $jsonMessage = convertOneValueArray($resultado);
            $GLOBALS['mensaje'] = json_encode($jsonMessage);
        
        }else{//Esto no se debe de hacer porque ya tenemos una session con el usuario
            $GLOBALS['ok'] = false;
            $GLOBALS['mensaje'] = "No se encontro el usuario, decirle a los del back end que la cagaron";
        }

    }
    //Desea actualizar la info del usuario
    if($_SERVER['REQUEST_METHOD'] === 'PUT'){

    }
    //Desea eliminar al usuario
    if($_SERVER['REQUEST_METHOD'] === 'DELETE'){
        //Eliminamos en la BD todo lo relacionado al usuario, juegos y reviews
        //Destruimos la session actual y lo mandamos al Login
        session_destroy();
    }
}


/*
?action = user_fav
Metodo GET => Obtencion de los juegos que el usuario guardo como favorito
Metodo POST => Elimina/Añade el juego a favoritos 
!!Es necesario que uno de los parametros de post sea gameID
*/
function manageFavorites(){
    $username = $GLOBALS['user'];
    //Agregar o eliminar de Favoritos
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {  //Si es metodo post Agregamos algo a favoritos
        $gameid = $_POST['gameID'];
        //Antes que nada checamos si el usuario ya lo tenia como favorito
        $sql = "SELECT username FROM usergames WHERE username = '{$username}' AND gameid = '{$gameid}'";
        $resultado = ConsultaSQL($sql);
        if(count($resultado)==0){//Es mayor a 0= entonces lo agregamos a favoritos
            $GLOBALS['mensaje'] = "Se añadio a favoritos";
            $date = date('Y-m-d');
            $sql = "INSERT INTO usergames ( username , gameid , fecha ) VALUES ('{$username}', '{$gameid}', '{$date}')";
        }else{//De otro modo lo eliminamos de favoritos
            $sql = "DELETE FROM usergames WHERE username = '{$user}' AND gameid = '{$gameid}'";
            $GLOBALS['mensaje'] = "Se elimino de tus favoritos";
        }
        EjecutarSQL($sql);
    }
    //Obtiene la lista de favoritos del usuario
    if($_SERVER['REQUEST_METHOD'] === 'GET'){
        $sql = "SELECT gameid FROM usergames WHERE username = '{$username}' ";
        $resultado = ConsultaSQL($sql);
        if(count($resultado)>0){
            $GLOBALS['mensaje'] =  ($resultado);//Se pone la lista de favoritos como el mensaje
        }else{
            $GLOBALS['ok'] = false; //No tiene juegos favoritos
            $GLOBALS['mensaje'] = "No tiene agregado ningun juego como favorito";
        }
    }
}

/*
?action = user_rev
Metodo GET => Obtencion de las reviews que ha realizado el usuario
Metodo POST => Añade la review
--> La fecha la tomamos de la funcion de php date("Y-m-d");
*/
function manageGameReviews(){
    $username = $GLOBALS['user'];
    $gameid = $_REQUEST['gameid'];
    //$topRating = $_POST['topRating'];

    //Agregar o eliminar de Review
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {  //Si es metodo post Agregamos algo a favoritos
        POSTReviewMethods($username, $gameid);
        return;
    }
    //Obtiene la lista de reivews del usuario
    if($_SERVER['REQUEST_METHOD'] === 'GET'){
        GETReviewMethods($username, $gameid);
        return;
    }
}

function POSTReviewMethods($username, $gameid){ //Se sobreentiende que se procesa una review a la vez
    $option = $_POST['option'];
    $date = date('Y-m-d');
    $review = $_POST['review'];
    $rating = $_POST['rating'];

    $sql = "SELECT username, gameid FROM reviews WHERE username = '{$username}' AND  gameid = '{$gameid}'";
    $result = ConsultaSQL($sql);

    if ($option == $GLOBALS['_ADD'] && count($result)==0 ) {
        $sql = "INSERT INTO reviews (username, fecha, gameid, descripcion, calificacion, calificacionTop) VALUES ('{$username}', '{$date}', '{$gameid}', '{$review}', '{$rating}', '5')";
        $GLOBALS['mensaje'] = "Review Added Successfully";
        EjecutarSQL($sql);
        return;
    }else{
        $GLOBALS['mensaje'] = "Already reviewed";
    }

    if ($option == $GLOBALS['_DELETE']  && count($result)==1) {
        $sql = "DELETE FROM reviews WHERE username = '{$username}' AND  gameid = '{$gameid}'";
        $GLOBALS['mensaje'] = "Review Deleted Successfully";
        EjecutarSQL($sql);
        return;
    }

    if ($option == $GLOBALS['_UPDATE']  && count($result)==1) {
        $sql = "UPDATE reviews SET fecha = '{$date}', descripcion = '{$review}', calificacion = '{$rating}' WHERE  username = '{$username}' AND  gameid = '{$gameid}'";
        $GLOBALS['mensaje'] = "Review Updated Successfully";
        EjecutarSQL($sql);
        return;
    }
}

function GETReviewMethods($username, $gameid){ //GET
    $sql = "SELECT * FROM reviews WHERE username = '{$username}' ";
    $result = ConsultaSQL($sql);
    if(count($result)>0){
        $GLOBALS['mensaje'] =  ($result);//Se pone la lista de favoritos como el mensaje
    }else{
        $GLOBALS['ok'] = false; //No tiene juegos favoritos
        $GLOBALS['mensaje'] = "No hay review del juego";
    }
}

function convertOneValueArray($array){
    return array_pop($array);
}

?>