<?php

function startSession($sessionName, $sessionValue){
    session_start();
    $_SESSION[$sessionName] = $sessionValue;
}

function getSession($sessionID){
    session_start();
    return (isset($_SESSION[$sessionID]))? $_SESSION[$sessionID] : "";
}

?>