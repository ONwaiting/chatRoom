<?php
    include './conn.php';
    session_start();
    $usm=$_SESSION['usm'];
    $talk=$_GET['talk'];
    $sql="insert room values(null,'$usm','$talk')";
    $result=mysql_query($sql);
    echo $result;
?>