var express = require("express"),
    app = express();


app.use(express.bodyParser());
app.use(express.static(__dirname));
app.listen(8081);
