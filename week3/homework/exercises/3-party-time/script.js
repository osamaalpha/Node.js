
/**
 * 3: Party time
 * 
 * After reading the documentation make a request to https://reservation100-sandbox.mxapps.io/rest-doc/api
 * and print the response to the console. Use async-await and try/catch.
 * 
 * Hints:
 * - make sure to use the correct headers and http method in the request
 */
const fetch = require('node-fetch')
async function makeReservation() {
  // YOUR CODE GOES IN HERE
  try{
const response = await fetch ('https://reservation100-sandbox.mxapps.io/api/reservations',{
  method: 'post',
  body:  JSON.stringify({"name": "Osama",
  "numberOfPeople": 5
  }),
  headers: { 'Content-Type': 'application/json' },
})
const getData = await response.json()
const getInvitation = await getData
console.log(getInvitation)
  }
  catch(err){
console.log(err)
  }
}

makeReservation();