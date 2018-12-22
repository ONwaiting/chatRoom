const WebSocketServer = require('ws').Server;
const wss = new WebSocketServer({port:3000});


var users={};
var name=0;


wss.on('connection',function(user){
    user.name=++name;
    users[user.name]=user;
    console.log('服务端：'+user.name+'已上线');
    user.on('message',msg=>{
        speaking(user,msg);
    });
    user.on('close',msg=>{
        console.log(user.name+'下线了');
        delete users[user.name];
    });
    // speaking()
    function speaking(user,msg){
        for(var i in users){
            users[i].send(user.name+'say:'+msg);
        }
    }
});