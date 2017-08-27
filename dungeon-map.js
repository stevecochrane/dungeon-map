const compression = require("compression");
const express     = require("express");

//	Initialize Express
const app = express();

//	Treat "/foo" and "/Foo" as different URLs
app.set("case sensitive routing", true);

//	Treat "/foo" and "/foo/" as different URLs
app.set("strict routing", true);

//	Default to port 3000
app.set("port", process.env.PORT || 3000);

//	Set /views as the default views directory
app.set("views", "./views");

//	Set Pug as the default template engine
app.set("view engine", "pug");

//	Compress all requests
app.use(compression());

//	Set contents of /public to be served as static files with "/static/" URL prefix
app.use("/static", express.static(__dirname + "/public"));

//	Default app view, which displays all elements from the API
app.get("/", function(req, res) {
	res.render("index");
});

//	Handle 404 errors
app.use(function(req, res) {
	res.status(404);
	// TODO: Add 404 template
	// res.render("404");
	res.send("Error 404");
});

//	Handle 500 errors
app.use(function(err, req, res, next) {
	console.error(err.stack);
	res.status(500);
	// TODO: Add 500 template
	// res.render("500");
	res.send("Error 500");
});

app.listen(app.get("port"), function() {
	console.log("Express started on http://localhost:" + app.get("port") + "; press Ctrl-C to terminate.");
});
