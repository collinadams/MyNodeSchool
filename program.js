// console.log(HELLO WORLD);

var sumCommandLineNums = function(argArr){
  var sum = 0;
  for(var i = 2; i < argArr.length; i++){
    sum+= +argArr[i];
  }

  console.log(sum);
};

// sumCommandLineNums(process.argv);

var fs = require('fs');
var path = require('path');

var myMod = require('./module.js');

var countNewLinesSync = function(filePath){
  var buffer = fs.readFileSync(filePath);
  var fileLinesString = buffer.toString();
  var numOfLines = fileLinesString.split('\n').length - 1;
  console.log(numOfLines);
};

// countNewLinesSync(process.argv[2]);

var countNewLinesAsync = function(filePath){
  fs.readFile(filePath, 'utf8', function(err, data){
    console.log(data.split('\n').length - 1);
  });
};

// countNewLinesAsync(process.argv[2]);

var findFilePathNames = function(filePath, fileType){
  var arrayOfFileNames;
  fs.readdir(filePath, function(err, list){
    if(err){
      throw new Error(err);
    }
    arrayOfFileNames = list.filter(function(dirName){
      return path.extname(dirName) === '.' + fileType;
    });
    arrayOfFileNames.forEach(function(fileName){
      console.log(fileName);
    });
  });
};

// findFilePathNames(process.argv[2], process.argv[3]);

myMod(process.argv[2], process.argv[3], function(err, array){
  if(err){
    throw new Error(err);
  }
  array.forEach(function(fileName){
    console.log(fileName);
  });
});