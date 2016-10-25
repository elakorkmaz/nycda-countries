var fs = require('fs');

fs.readFile('countries.json', function(error, data) {
  var countryInfo = JSON.parse(data);
  for (var i = 0; i < countryInfo.length; i++) {
    if (countryInfo[i].name === process.argv[2]) {
        console.log(countryInfo[i]);
    }
  }
});
