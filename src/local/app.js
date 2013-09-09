var request = require("request"),
    express = require("express"),
    app = express();


app.use(express.static(__dirname));
app.listen(8081);

//app.get("/proxy", function(req, res) {
//    var url = req.query.source;
//
//    if (url) {
//        request(url).pipe(res);
//    }
//});
