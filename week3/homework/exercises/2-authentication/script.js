
/**
 * 2. Authentication
 * 
 * Using node-fetch make an authenticated request to https://restapiabasicauthe-sandbox.mxapps.io/api/books
 * Print the response to the console. Use async-await and try/catch.
 * 
 * Hints:
 * - for basic authentication the username and password need to be base64 encoded
 */
const fetch =require('node-fetch')
async function printBooks() {
  // YOUR CODE GOES IN HERE
  try{
    const getApi = await fetch('https://restapiabasicauthe-sandbox.mxapps.io/api/books',{
      headers: { 'Authorization': 'Basic YWRtaW46aHZnWDhLbFZFYQ==' }
    })
    const getData = await getApi.json()
    const getBooks = await getData
    console.log(getBooks)
  }
  catch(err){
    console.log(err)
  }
}

printBooks();