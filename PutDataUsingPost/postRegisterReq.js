const axios = require('axios');

async function makePostRequest() {

    params = {
        username: 'abhishek123',        
        email: 'abhie8101@gmail.com',
        password: 'mansi8101',
      }
    try{ 
        let res = axios.post('http://localhost:3000/register/', params);
        //console.log(res.data);
    }  
    catch(err){
        console.log("error occoredd!!!");
    }
}

makePostRequest();