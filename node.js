var express = require ('express');
var app = express();
var path = require('path'); 


app.get("/",function(req , res ){
    res.status(200).sendFile(path.join(__dirname +'/indexs.html'));
});

app.get("/css/index.css",function(req , res ){
    res.status(200).sendFile(path.join(__dirname +'/css/index.css'));
});

app.get("/javascript/myScript.js",function(req , res ){
    res.status(200).sendFile(path.join(__dirname +'/javascript/myScript.js'));
});

app.listen(8080 , function(err){
    if(err){
        console.log("went rong"+err);
    }else{
    console.log("we are listening  at port 8080");
    }
})
