var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var jobSchema = new Schema({
    Id : {
        type:String,
        required:true
    },
    title :{
        type:String,
        required:true
    },
    description :{
        type : String,
        required:true
    },
    status:{
        type : String,
        required:true
    },
    salary:{
        type : Number,
        required:true,
    },
    rejected_candidates : {
        type : [String],
    },
    hole_condidate : {
        type : [String],
    }   
})


module.exports = mongoose.model('Job' , jobSchema);