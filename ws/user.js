var ws = new WebSocket('ws://127.0.0.1:3000');
ws.onopen = function(){
	console.log(0);
};

ws.onmessage = function(event){
	var chatroom = document.querySelector('.room');
	chatroom.innerHTML +=event.data + '<br/>';
};

ws.onclose = function(){
	console.log('Closed');
};

ws.onerror = function(err){
	console.log('error'+err);
};

var say=document.querySelector('.say');
var content=document.querySelector('.content');
say.onclick=function(){
    ws.send(content.value);
}