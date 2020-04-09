const axios = require('axios');

async function makePostRequest() {

    params = {
        name : "Neha Goyal",
        address : "WARD NO 01 nani",
        contact : "1234567123"
    }
    try{ 
        let res = axios.post('http://localhost:3000/addCandidate/', params);
        console.log(res);
    }  
    catch(err){
        console.log("error occoredd!!!");
    }
}

makePostRequest();