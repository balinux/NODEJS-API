var express = require('express')
var app = express()
const https = require('https');
var url   = 'https://api.icndb.com/jokes/random';


app.get('/', function (req, res) {
	var b;

	https.get(url, (res) => {
	  // console.log('statusCode:', res.statusCode); 
	  // console.log('headers:', res.data);

	  res.on('data', (d) => {
	    console.log(JSON.parse(d).value.joke);
    	
	  });

	}).on('error', (e) => {
	  console.error(e);
	});


  res.send('THE JOKER')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
