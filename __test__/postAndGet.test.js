const request = require('../commonTests');
const fs = require('fs');


//Create a new user
describe("POST request", () => {
  
  try{
    let userDetails;
    beforeEach(function () {  
        console.log("Input user details!")
        userDetails = {
                "config": 
                    {
                 "strictMode":false
                    
                 },
               
               "payload":
               {
                              
                 "identifier": "2022",
                 "sender": "Harshu",
                 "sent": "98765",
                 "status": "Active",
                 "msgType": "Alert",
                 "source": "FeedJar",
                 "scope": "Public",
                 "code": ["2.1", "2.2"],
                 "info": [
                   {
                     "category": ["A","B"],
                     "event":"BFS Test",
                     "urgency":["Immediate","Expected"],
                     "responseType":["Shelter","Avoid"],
                     "severity":["Extreme","Severe"],
                     "certainity":["Observed","Likely"],
                     "eventCode":["e1","e2"],
                     "parameter": [
                       {
                         "valueName": "same",
                         "value": "CEM"
                       },
                       {
                         "valueName": "ISOK",
                         "value": "OK"
                       }
                     ],
                     "resource":[
                         {
                       "resourceDesc":"IWS",
                       "mimeType":"html"
                     },
                     {
                       "resourceDesc":"IWS",
                       "mimeType":"image" ,
                       "digest":"SHA1"
                     }
                   ],
                   "area":[
                     {
                       "areaDesc":"Taylor; Clark",
                       "geocode":[
                         {
                           "valueName":"UGC",
                           "value":"WIZ017"
                         },
                         {
                           "valueName":"UGC",
                           "value":"WIZ017"
                         },
                         {
                           "valueName":"UGC",
                           "value":"WIZ017"
                         }
                       ]
                     }
                   ]
                   }
                   ]
                             
               },
               "post":true
                
      }; //new user details to be created
      });
    
    afterEach(function () {
      console.log("User is created ")
    });

	  it("Create user data", async done => {

        return request.request.post(`api/cap`) //post() of supertest
                //.set('Authorization', `Token $  {request.token}`) //Authorization token
                .send(userDetails) //Request header
                .expect(200) //response to be 200
                .then((res) => {
                    expect(res.text).toBeDefined(); //test if response body is defined
                    console.log("POST response body : ", res.text)
                    done();
                  })
                })
              }
              catch(err){
                console.log("Exception : ", err)
              }
        });

//GET all users      
describe("GET all user details", () => {
  
  try{
      beforeEach(function () {
        console.log("GET all users details ")
    });
          
      afterEach(function () {
        console.log("All users' details are retrieved")
    });

      test("GET user output", async done =>{
        await request.request.get(`capfeed`) //get() of supertest
                                //.set('Authorization', `Token ${request.token}`) 
                                .expect(200).then((response) =>{
                                console.log("GET RESPONSE : ", response.text);
                                done();
                    })
      })
    }
  catch(err){
    console.log("Exception : ", err)
    }
});