var express = require('express');
var app = express();
var moment = require("moment");
app.get('/', function (req, res) {
  res.send('Same usage as here: https://timestamp-ms.herokuapp.com \n No point in copying.');
});
app.get("/:time", function (req, res){
  var result = {
    unix: null,
    natural: null
  };
  if (typeof +req.params.time === "number" && +req.params.time >= 0){
    var date = moment.unix(req.params.time).format();
    var timeStamp = moment(date).unix();

    result.unix = timeStamp;
    result.natural = moment(date).format("MMMM DD, YYYY");


  } else {
    if (moment(req.params.time).isValid()){
      console.log("This is Date");

      var timeStamp = moment(req.params.time).unix();
      var date = moment.unix(timeStamp).format();

      result.unix = timeStamp;
      result.natural = moment(date).format("MMMM DD, YYYY");
    }

  }

  res.send(JSON.stringify(result));
});

app.listen(process.env.PORT || 3543, function () {
});
