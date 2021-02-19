const axios = require('../axios');
const fs = require('fs');
var fastXmlParser = require('fast-xml-parser');
var jp = require('jsonpath');

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


  // test('Post the request', () => {
  //   return axios.post('api/mockfemacap',payload)
  //   .then( res => console.log(res) )
  // });
  

  // test('Get the request', () => {
  //   return axios.get('mockfemacap')
  //         .then( res => 
  //           expect(res.data).toBeDefined())
           
  // });
  
  test('Validate attribute values from the response', async() => {
    const resp =  await axios.get('mockfemacap');
        
    //default options, need not to set
    var options = {
      attributeNamePrefix : "@_",
      attrNodeName: false,
      textNodeName : "#text",
      ignoreAttributes : true,
      ignoreNameSpace : true,
      allowBooleanAttributes : false,
      parseNodeValue : true,
      parseAttributeValue : false,
      trimValues: true,
      cdataTagName: "__cdata", //default is 'false'
      cdataPositionChar: "\\c"
           }
  
if(fastXmlParser.validate(resp.data)=== true){//optional
var jsonObj = fastXmlParser.parse(resp.data,options);
}
//var jason = JSON.stringify(jsonObj);
var identifiers = jp.query(jsonObj, '$..identifier');
console.log(identifiers);

// verify first identifier
var firstID = jp.value(jsonObj, '$..identifier');
  console.log(firstID);

   // verify 4th sender name
  //  var sender = jp.apply(jsonObj, '$..code', (value: any) => {
  //      console.log(value);
  //      return value;
  //    });
  //  console.log(sender);
   });
  
 }
catch(err){
  console.log("Exception : ", err)
}
})

