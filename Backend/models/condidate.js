var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var candidateSchema = new Schema({
    name : {
        type : String,
        required:true
    },
    
    address : {
        type : String,
    },

    contact : {
        type : String,
    }

});

module.exports = mongoose.model('Candidates' , candidateSchema);