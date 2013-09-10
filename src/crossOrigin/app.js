var express = require("express"),
    app = express(),
    staticCorsHandler = function(req, res, next) {
        if (/\/widen.png$/.exec(req.path)) {
            res.header("Access-Control-Allow-Origin", "http://localhost:8081");
        }

        next();
    };


//app.use(staticCorsHandler);
app.use(express.static(__dirname));
app.listen(8081);

app.get("/time", function(req, res) {
    var now = new Date().toString();

    res.send(now);
//    res.jsonp(now);
});
