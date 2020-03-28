var express = require("express");
var app=express();

app.get("/la_neta",(req,res)=>
    res.send("<h1> Ey que pedo cachorros </h1>")
);

app.listen(3000,()=>
console.log("la aplicacion inicio en el puerto 3000...")
);