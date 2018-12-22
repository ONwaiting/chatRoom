<?php
    include "./conn.php";
    session_start();
    if(!isset($_SESSION['usm'])){
        echo ('{"msg":"聊天之前需要网名"}');
        exit;
    }else{
        $usm=$_SESSION['usm'];
        $sql="select * from room";
        $dataarr=array();
        $result=mysql_query($sql);
        for($i=0;$i<mysql_num_rows($result);$i++){
            $dataarr[$i]=mysql_fetch_array($result,MYSQL_ASSOC);
        }
        echo json_encode($dataarr);
        }
    
?>