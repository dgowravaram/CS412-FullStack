const express = require('express');
const router = express.Router();
const req = require('request');

/* GET home page. */            //http://localhost:3000/
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


//http://localhost:3000/fx
router.get('/', function(req, res, next) {
  var options = {
    'method': 'GET',
    'url': 'api.openweathermap.org/data/2.5/weather?lat=42.361145&lon=-71.057083&appid=c03eeb08b471c10ca8057b5078e9ca0a',
    'headers': {
      'Authorization': 'Basic e3tUV0lMSU9fQUNDT1VOVF9TSUR9fTp7e1RXSUxJT19BVVRIX1RPS0VOfX0='
    }
  };
  req(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
    res.json(response.body)
  });



  res.render('index', { title: 'Express' });
});



module.exports = router;
