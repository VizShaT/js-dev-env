let express = require("express");
let path = require("path");
let open = require("open");

let port = process.env.PORT || 3000;
var app = express();

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../src/index.html') );
});

app.listen(port, function(err){
    if(err){
        console.log(err);
    }else{
        open('process.env.IP' + port); // to run on c9.io
        // open('http://localhost:'. port) // to run on local system
        console.log("listening on port " + port);
    }
});
