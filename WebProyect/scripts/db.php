<?php

function connectMysqli(){
    $jsonStr = file_get_contents("config.json");
    $config = json_decode($jsonStr);
    $connection = mysqli_connect(
        $config->database->host, 
        $config->database->user, 
        $config->database->password,
        $config->database->dbname
        );
    return $connection;
}