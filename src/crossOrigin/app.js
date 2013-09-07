var express = require("express"),
    app = express(),
    corsHandler = function(req, res, next) {
        //TODO target specific resources and origins
        res.header("Access-Control-Allow-Origin", "*");

        next();
    };


app.use(express.bodyParser());
//app.use(corsHandler);
app.use(express.static(__dirname));
app.listen(8081);
