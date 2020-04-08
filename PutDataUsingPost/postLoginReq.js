const axios = require('axios')
 
axios.post('http://localhost:3000/login', {
    username: 'abhishek123',
    password: 'mansi8101'
  })
  .then(function (response) {
    console.log(response);
})