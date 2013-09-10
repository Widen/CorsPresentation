var votes = 0,
    express = require("express"),
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

app.get("/votes", function(req, res) {
//    res.send(votes.toString());
    res.jsonp(votes);
});

app.post("/vote", function(req, res) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8081");

    var isUp = req.query.isUp;

    if (isUp === "true") {
        votes++;
    }
    else {
        votes--;
    }

    res.send(votes.toString());
});
