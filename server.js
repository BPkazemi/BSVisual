var express = require('express'),
	app = express();
var path = require('path');

app.listen(process.env.PORT || 3000, function() {
	console.log('Express listening on port: ' + process.env.PORT || 3000);
});

app.use(express.errorHandler(express.logger('dev')));
app.use(express.static(path.join(__dirname + '/public')));

app.get('/', function(req, res) {
	res.send('./index.html');
});