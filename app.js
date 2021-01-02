var express = require('express');
var app = express();

app.get('/', function (req, res) {
   
    var mysql  = require('mysql');

    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'me',
        password : 'secret',
        database : 'my_db'
      });
       
      connection.connect();
       
      connection.query('SELECT 1 + 1 AS solution', function (error, results) {
        if (error) throw error;
       
        // send records as a response
        res.send(results);
      });
       
      connection.end();
    

            
            
        });
   


var server = app.listen(5000, function () {
    console.log('Server is running..');
});