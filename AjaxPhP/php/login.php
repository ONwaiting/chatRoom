<?php
    include './conn.php';
    session_start();
    $usm=$_POST['usm'];
    $_SESSION['usm']=$usm;
    $sql="insert users values(null,'$usm')";
    mysql_query($sql);
?>