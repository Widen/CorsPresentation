var express = require("express"),
    app = express(),
    corsHandler = function(req, res, next) {
        if (/\/widen.png$/.exec(req.path)) {
            res.header("Access-Control-Allow-Origin", "http://localhost:8081");
        }

        next();
    };


app.use(express.bodyParser());
//app.use(corsHandler);
app.use(express.static(__dirname));
app.listen(8081);
