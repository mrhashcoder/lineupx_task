const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

router.post('/register' ,async(req,res,next) =>{
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
        
    try{
        if(isValid(req) == 0)
            return res.status(400).json({message : "all fields not recieved properly!!1"});
    }
    catch(err){
        //console.log(err);
        //console.log("unable to processs");
        res.status(500).json({message : "yeh error nhi pta mere ko"});
    }

    var userif = await User.findOne({username : username});
    
    try {
        if(userif){
            return res.status(401).json({message : "username already in use!!"});
        }else{
            const newUser = User({
                username : username,
                password : password,
                email : email
            });
            newUser.save();
            return res.status(200).json({message : "USER INFO REGISTERED!!!"});
        }
    
    } catch(err){
        const error = new Error("SOMETHING WENT WRONG!!!");
        error.httpStatusCode = 500;
        return next(error);
    }
});

router.post('/login' , async(req , res , next) => {  
    try{
        if(isValidLoginData(req) == 0){
            console.log("return from 1");
            return res.status(400).json({message : "Invalid data for Login"});     
        }
    }catch(err){
        console.log("returned from 2")
        console.log(err);
        return res.status(500).json({message : "yeh error nhi pta mere ko"});
    }

    const username = req.body.username;
    const password =req.body.password;
    try{
        var userif = await User.findOne({username : username});     
    }catch(err){
        return res.status(500).json({message : "database error"});
    }
    try{
        if(!userif){
            return res.status(404).json({message : "User not Found"});
        }
        //password match
        else{
            if(password != userif.password){
                return res.status(401).json({message : "password not matched!!"});
            }
            else{
                const payload = {
                    id:userif.id,
                    name : userif.username
                };
                jwt.sign(payload, "secret",{expiresIn : 12345},(err , token) => {
                    token = "Bearer " + token;
                    res.status(200).json({
                        token : token,
                        message : "login successed"
                    });
                });
                
            }
        }
    } catch(err){
        return res.status(500).json({message : "yeh error nhi pta mere ko"});
    }
    
})


function isValid(req){
    var username = req.body.username;
    var password = req.body.password;
    var email = req.body.email;
    if(!username)
        return 0;
    if(!password)
        return 0;
    if(!email)
        return 0;
    
    if(password == "")
        return 0;
     
    if (username == "")
        return 0;

    return 1;
}

function isValidLoginData(req){
    var username = req.body.username;
    var password = req.body.password;
    if(!username)
        return 0;
    if(!password)
        return 0;
    if(username = "")
        return 0;
    if(password == "")
        return 0;
    
    return 1;
}

module.exports = router;