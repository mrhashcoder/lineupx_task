const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const auth = require('./api/auth');
const passport = require('passport');


const app = express();
app.use(bodyParser.json());

//DATABASE
const mongoURL = "mongodb+srv://mrhashcoder:mansi8101@lineupx-odgiq.mongodb.net/test?retryWrites=true&w=majority";
app.get('/' ,(req , res) => {
    console.log('index page get hit!!!');
    res.send("hello");
})
mongoose.connect(mongoURL,{
    useNewUrlParser : true,
    useUnifiedTopology:true
}).then(console.log("database connected!!!"));

//ROUTES

app.get('/' ,(req , res) => {
    console.log('index page get hit!!!');
    res.send("hello");
})
app.use('/' , auth);


//Middleware of passport
app.use(passport.initialize());
var passportconfig = require('./passport');

passportconfig(passport);

app.listen(3000 , () => {
    console.log("server at 3000");
})