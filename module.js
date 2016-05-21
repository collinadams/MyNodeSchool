var fs = require('fs');
var path = require('path');


module.exports = function myFunc(filePath, fileType, cb){
  fs.readdir(filePath, function(err, list){
    if(err){
      cb(err);
      return;
    }
    var arrayOfFileNames = list.filter(function(dirName){
      return path.extname(dirName) === '.' + fileType;
    });
    cb(null, arrayOfFileNames);
  });
};