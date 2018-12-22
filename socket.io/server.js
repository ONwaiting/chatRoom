var app=require('express')();
var http=require('http').Server(app);
var io=require('socket.io')(http);
var fs = require('fs');

// http设置
app.get('/',function(req,res){
	function callback(data){
		res.send(data.toString());
	}
	fs.readFile('./room.html',function(err,data){
		if(err){
			console.log(err);
			callback('文件不存在!');
		}else{
			callback(data);
		}
	});

});

var users={};
var name=0;


io.on('connection',function(user){
    user.name=++name;
    users[user.name]=user;
    console.log('服务端：'+user.name+'已上线');
    user.on('message',msg=>{
        speaking(user,msg);
    });
    user.on('disconnect',msg=>{
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
http.listen(3000,function(){
	console.log('listening on *:3000');
});