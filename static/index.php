<?php
include_once('blocks/functions.php'); 

if(file_exists(MAINFILE.".php")){
    include_once(MAINFILE.".php");
}elseif(file_exists('page-'.MAINFILE.".php")){
    include_once('page-'.MAINFILE.".php");
}elseif(file_exists('single-'.MAINFILE.".php")){
    include_once('single-'.MAINFILE.".php");
}elseif(file_exists('archive-'.MAINFILE.".php")){
    include_once('archive-'.MAINFILE.".php");
}else{
    include_once("front-page.php");
}
