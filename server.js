var express = require('express')
var app = express()
app.get('/',function(req,res){
    res.send('Hello World')
});
app.listen(3001,function(){
console.log('Listening on ports 3000')
});
module.exports=app;