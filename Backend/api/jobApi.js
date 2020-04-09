const express = require('express');
const router = express.Router();
const Job = require('../models/job');



router.post('/addjob' , async(req,res,next) => {
    try{
        newJob = new Job({
            title : req.body.title,
            description : req.body.description,
            status : req.body.status,
            salary : req.body.salary
        });
        newJob.save();
        console.log("Job posted");
        return res.status(200).json({message : " done "});

    }catch(err){
        console.log("error aa gaya");
        return res.status(500).json({message : "SOME SYSTEM ERROR"});
    }
});

module.exports = router;