var con = require('./connection');

var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true }))

app.get('/',function(req,res){
    res.sendFile(__dirname+'/register.html');
});

app.post('/',function(req, res){
    var email = req.body.email;
    var password = req.body.password;
    var confirmpassword = req.body.confirm-password ;

    con.connect(function(error){
        if(error) throw error;

        var sql = "INSERT INTO loginuser(user_name,user_pass) VALUES('"+email+"','"+password+"')";
        con.query(sql,function(error,result){
            if(error) throw error;
            res.send('Register Successfull' + result.insertId);
        });
    });

});

app.listen(7000);
