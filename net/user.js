var net=require('net');

var host='127.0.0.1';
var port=3000;
var user=new net.Socket();
user.setEncoding = 'UTF-8';
user.connect(port,host,function(){
    user.write('服务端你好');
});
user.on('data',function(data){
	console.log('[client]服务器端传来：'+data);
	speak();
});

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function speak(){
    rl.question('请输入：', (inputStr) => {
        // 对答案进行处理
        if(inputStr != 'bye'){
			user.write(inputStr + '\n');
		}else{
			user.destroy();
			rl.close();
		}
      });
}
user.on('error',function(error){
	console.log('error:'+error);
})

user.on('close',function(){
	console.log('connection closed');
})