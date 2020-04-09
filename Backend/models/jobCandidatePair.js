const moogoose = require('mongoose');
const Schema = moogoose.Schema;

JobCandidatePairSchema = new Schema({
    job : {
        type : String,
        required : true
    },
    candidate : {
        type : String,
        required:true
    },
    //ON HOLD ,, ON INTERVIEW  ,, REJECTED
    state : {
        type : String,
        required : true
    }
})