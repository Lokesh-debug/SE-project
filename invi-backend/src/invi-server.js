const express = require('express');
const cors = require('cors')
const app = express();
var mysql=require('mysql');
var connection=mysql.createConnection({host:'localhost',
user:'root',
password:'',
database:'invi_app'});
app.use(cors());

connection.connect(function(error){
    if(error) throw error;
    console.log('Connected!!');
})
var sql="select * from user";
connection.query(sql,function(err,result){
    if(err) throw err;
    console.log("Res"+result);
});
app.use('/login', (req, res) => {
 
  res.send({
    token: 'test123'
  });
  
});
connection.end();
app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));