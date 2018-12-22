<?php
    header("Content-type:text/html;charset=utf-8");
    error_reporting(E_ALL ^ E_DEPRECATED);
    define("host","localhost");
    define("username","root");
    define("password","root");
    $conn=@mysql_connect(host,username,password);
    if(!$conn){
        die('数据库连接失败'.mysql_error());
    }
    if(!mysql_select_db('talk')){
        die('数据库不存在');
    }else{
        mysql_select_db('talk');
    }
    mysql_query('set names utf8');

?>