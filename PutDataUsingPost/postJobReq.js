const axios = require('axios');

async function makePostRequest() {

    params = {        
        title : "System Tester",
        description : "Bahut huwa Description",
        status : "open",
        salary : "10000"
    }
    try{ 
        let res = axios.post('http://localhost:3000/addjob/', params);
        console.log(res);
    }  
    catch(err){
        console.log("error occoredd!!!");
    }
}

makePostRequest();