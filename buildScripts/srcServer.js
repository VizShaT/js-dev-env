import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev.js';


/* eslint-disable no-console */
const port = process.env.PORT || 3000;
const app = express();
const complier = webpack(config);

app.use(require("webpack-dev-middleware")(complier, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

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
