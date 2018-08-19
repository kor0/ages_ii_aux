var email= 'policia@civil.com';
var password = 'senhasenha';
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
  
connection.query('SELECT * FROM users WHERE email = ?',[email], function (error, results, fields) {
    if (error) {
        // console.log("error ocurred",error);
        res.send({
            "code":400,
            "failed":"error ocurred"
        })
    } else {
        // console.log('The solution is: ', results);
        if(results.length >0){
            if(results[0].password == password){
                res.send({
                    "code":200,
                    "success":"login sucessfull"
                    });
            }
            else{
                res.send({
                    "code":204,
                    "success":"Email and password does not match"
                    });
            }
        }
        else{
            res.send({
            "code":204,
            "success":"Email does not exits"
                });
        }
    }
});