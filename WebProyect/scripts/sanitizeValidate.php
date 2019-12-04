<?php

function cleanVariable($var){
    $var = htmlentities($var, ENT_QUOTES);
    $var = strip_tags($var);
    $var = filter_var($var,FILTER_SANITIZE_MAGIC_QUOTES);
    $var = filter_var($var,FILTER_SANITIZE_STRING);
    return $var;
}
?>