var votes = 0,
    allowedOrigins = [
        "http://localhost:8081",
        "http://192.168.130.118:8081",
        "http://10.1.80.135:8081"
    ],
    express = require("express"),
    app = express(),
    staticCorsHandler = function(req, res, next) {
        if (/\/widen.png$/.exec(req.path)) {
            verifyCorsOrigin(req, res);
        }

        next();
    },
    verifyCorsOrigin = function(req, res) {
        var origin = req.get("Origin");

        if (allowedOrigins.indexOf(origin) >= 0) {
            res.header("Access-Control-Allow-Origin", origin);
            return true;
        }
    };


//app.use(staticCorsHandler);
app.use(express.static(__dirname));
app.listen(8081);

app.get("/vote", function(req, res) {
    res.header("Cache-Control", "no-cache");

//    res.send(votes.toString());
    res.jsonp(votes);
});

app.post("/vote", function(req, res) {
    verifyCorsOrigin(req, res);
    res.header("Content-Type", "text/plain");
    res.header("Cache-Control", "no-cache");  //IE8 XDR will cache POSTs

    var isUp = req.query.isUp;

    if (isUp === "true") {
        votes++;
    }
    else {
        votes--;
    }

    res.send(votes.toString());
});

app.options("/vote", function(req, res) {
    if (verifyCorsOrigin(req, res)) {
        res.header("Access-Control-Allow-Methods", "DELETE");
    }

    res.send();
});

app.delete("/vote", function(req, res) {
    verifyCorsOrigin(req, res);

    votes = 0;

    res.send(votes.toString());
});
