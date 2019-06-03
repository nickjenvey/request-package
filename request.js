let request = require('request');
let fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
  .on('error', function(err) {
    console.log('Error Code: ' + response.statusCode)
  })
  .on('response', function(response) {
    console.log('Code: ' + response.statusCode + '\nMessage: ' + response.statusMessage + '\nType: ' + response.headers['content-type']);
  })
  .pipe(fs.createWriteStream('./future.jpg'));