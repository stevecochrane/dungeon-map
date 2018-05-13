const compression = require("compression");
const express     = require("express");
const path        = require("path");

//	Initialize Express
const app = express();

//	Treat "/foo" and "/Foo" as different URLs
app.set("case sensitive routing", true);

//	Treat "/foo" and "/foo/" as different URLs
app.set("strict routing", true);

//	Default to port 3000
app.set("port", process.env.PORT || 3000);

//	Compress all requests
app.use(compression());

//	Set contents of /public to be served as static files at base directory
app.use("/", express.static(__dirname + "/public"));

//	Default app view, which displays all elements from the API
app.get("/", function(req, res) {
	res.render("/index.html");
});

//	Handle 404 errors
app.use(function(req, res) {
	res.status(404);
	// TODO: Add 404 template
	// res.render("404");
	res.send("Error 404");
});

//	Handle 500 errors
app.use(function(err, req, res) {
	console.error(err.stack);
	res.status(500);
	// TODO: Add 500 template
	// res.render("500");
	res.send("Error 500");
});

app.listen(app.get("port"), function() {
	console.log("Express started on http://localhost:" + app.get("port") + "; press Ctrl-C to terminate.");
});
