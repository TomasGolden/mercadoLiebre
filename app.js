const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'));

app.get('/', function(req,res){
    res.sendFile(path.resolve(__dirname, './views/home.html'))
});
app.get('/login.html', function(req,res){
    res.sendFile(path.resolve(__dirname, './views/login.html'))
});
app.get('/register.html', function(req,res){
    res.sendFile(path.resolve(__dirname, './views/register.html'))
});
app.set('puerto', process.env.PORT || 2496);

app.listen (app.get('puerto'), ()=> console.log(`Servidor corriendo de manera satisfactoria  ${app.get('puerto')}` ));
