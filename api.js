const https = require('https');
var url   = 'https://api.icndb.com/jokes/random';

https.get(url, (res) => {
  // console.log('statusCode:', res.statusCode);
  // console.log('headers:', res.headers);

  res.on('data', (d) => {
    // process.stdout.write(d);
    // console.log(d);
    var a = JSON.parse(d);
    console.log(a.value.joke); 
  });

}).on('error', (e) => {
  console.error(e);
});