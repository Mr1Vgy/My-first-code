var express = require('express')
var app = express()
//<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>

app.get('/', function (req, res) {
  //res.send('<title>Welcome</title> <h1>Welcome</h1> <body> <p>This is a test site</p> <input type = "button" id = "helpButton" value = "Click here for help"></input> </body>')
  app.use(express.static(__dirname + '/public'));
})
app.use(express.static(__dirname + '/public'));

app.get('/help', function (req, res) {
  res.send('<title>Help Page</title> <b>This is the help page.</b> <body> <p>Help is on the way...</p> <img src="http://t7.rbxcdn.com/fb73087d71531d3a273e14aeab5c306f" /> </body>')
})

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})

//<script type ="text/javascript">  $('#helpButton').click(function() { }