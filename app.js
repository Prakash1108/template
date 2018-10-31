const express = require('express');

const app = express();
app.set('view engine','ejs');

app.get('/',function(req,res){
  res.render('home');
});
app.get('/signup',function(req,res){
  res.render('signup');
});
app.get('/dashboard',function(req,res){
  res.render('dashboard');
});
app.listen(process.env.PORT || 3000,function(){
  console.log("listenning for the request");
});
