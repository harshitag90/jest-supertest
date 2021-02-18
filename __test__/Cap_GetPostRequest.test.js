const axios = require('../axios');
const fs = require('fs');
var convert = require('xml-js');

//Create a new user
describe("GET and POST request", () => {
  try
  {
    
 let payload = JSON.parse(fs.readFileSync('./TestFiles/payload.txt', 'utf-8'))
 beforeEach(function () {  
  console.log("Verify CAP Feed Source")
 });

 afterEach(function () {
  console.log("Cap Feed Source is verified")
});


  test('Post the request', () => {
    return axios.post('api/cap',payload)
    .then( res => console.log(res) )
  });
  

  test('Get the request', () => {
    return axios.get('capfeed')
          .then( res => 
            expect(res.data).toBeDefined())
           
  });
  
  test('Validate Sender name of first response', async() => {
    const resp =  await axios.get('capfeed')
    .then(resp =>
      expect(resp.data).toContain('Harshita'));
    // var options = {ignoreComment: true,compact: true, spaces: 2};
    // const result = convert.xml2json(resp.data, options); 
    // await expect(name).toBe('Harshita');

  });
  
 }
catch(err){
  console.log("Exception : ", err)
}
})

