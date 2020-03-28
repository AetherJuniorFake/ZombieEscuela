var express = require("express");
var app = express();
var path = require("path");
var fs = require("fs");

app.use((req,res,next)=>
    {
        var filepath = path.join(__dirname,"files",req.url);
        fs.stat(filepath,function(err,fileinfo){
            if(err){
                next();
                return;
            }
            if(fileinfo.isFile()){
                res.sendFile(filepath);
            }
            else{
                next();
            }
        });
    });

    app.use((req,res)=>{
        res.status(404);
        res.send("El archivo no existe mano, sorry")
    })

    app.listen(3000,()=>
    console.log("la aplicacion inicio en el puerto 3000...")
    );