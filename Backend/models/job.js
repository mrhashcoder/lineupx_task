var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var jobSchema = new Schema({
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
    }
})


module.exports = mongoose.model('Job' , jobSchema);