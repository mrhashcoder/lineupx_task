const express = require('express');
const router = express.Router();
const Candidate = require('../models/condidate');



router.post('/addCandidate' , async(req,res,next) => {
    try{
        newCandidate = new Candidate({
            name : req.body.name,
            address : req.body.address,
            contact : req.body.contact
        });
        newCandidate.save();
        console.log("Candidate Posted posted");
        return res.status(200).json({message : " done "});

    }catch(err){
        console.log(err);
        return res.status(500).json({message : "SOME SYSTEM ERROR"});
    }
});

module.exports = router;