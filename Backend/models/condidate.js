var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var candidateSchema = new Schema({
    Id : {
        type : String,
        required:true
    },
    name : {
        type : String,
        required:true
    },
    address : {
        type : String,
    },
    contact : {
        type : String,
    },
    jobsApplied : {
        type : [String]
    }
});

module.exports = mongoose.model('Candidates' , candidateSchema);