var net=require('net');

var users={};
var name=0;
var chatSever=net.createServer();

chatSever.on('connection',function(user){
    console.log('[server]客户端有人连接上来了');
    user.name=++name;
    users[user.name]=user;
    user.on('data',data=>{
        console.log('客户'+user.name+':'+data);
        speaking(user,data);
    });
    user.on('error',err=>{
        if(err!='Error: read ECONNRESET'){
            console.log('客户端错误：'+err);
        }
    });
    user.on('close',()=>{
        delete users[user];
        console.log(user.name+'下线了');
    });
    function speaking(user,msg){
        for(var i in users){
            users[i].write(user.name+'say:'+msg);
        }
    }
});

chatSever.listen(3000);
