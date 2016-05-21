var http = require('http');
var bl = require('bl');

http.get(process.argv[2], function(response){
  response.pipe(bl(function(err, data){
    if(err){
      return console.log(err); 
    }
    var totalResponseString = data.toString();
    console.log(totalResponseString.length);
    console.log(totalResponseString);
  }));
});