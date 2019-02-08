var express = require("express");  
const cors = require('cors');
var app = express();  

app.use(cors());
app.use(express.static("public"));

app.get("/", function(req, res){
	res.sendFile(__dirname + "/public/html/webwallet.html");
})

app.listen(8088);
