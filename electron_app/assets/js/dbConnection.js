var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'tonytony',
  database : 'rastreamento'
});

connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
  
    console.log('connected as id ' + connection.threadId);
  });

/*
connection.end(function(err) {
    connection.destroy();
  });
  */