var express = require("express");
var app = express(); 
var port=3000;

app.get('/',function(request,respond){
    respond.send("Hi User!");
});

app.get('/bye',function(request,respond){
    respond.send("See ya User!")
})
app.listen(port,function()
{
    console.log("App is listening on port 3000");
})