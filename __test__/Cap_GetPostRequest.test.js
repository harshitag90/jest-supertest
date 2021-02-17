const axios = require('axios');
const fs = require('fs');

//Create a new user
describe("GET and POST request", () => {
  
let payload = JSON.parse(fs.readFileSync('payload.txt', 'utf-8'))
  test('Post the request', () => {
    return axios.post('https://feedjar.herokuapp.com/api/cap',payload)
    .then( res => console.log(res) )
  });

  test('Get the request', () => {
    return axios.get('https://feedjar.herokuapp.com/capfeed')
          .then( res => 
           
            console.log(res) )
  });
})