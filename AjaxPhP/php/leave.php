<?php
    include './conn.php';
    session_start();
    if(isset($_SESSION['usm'])){
            $usm=$_SESSION['usm'];
            $sql="delete from users where usm='$usm'";
            mysql_query($sql);
            session_unset();//free all session variable
            session_destroy();//销毁一个会话中的全部数据
            setcookie(session_name(),'',time()-3600);//销毁与客户端的卡号
    }
?>
