const express = require('express')
const app = express();
app.use(express.json())
// YOUR CODE GOES IN HERE
app.get('/', function (req, res) {
  res.send('Hello World')
})
const fs = require("fs");
app.post('/blogs', (req, res) => {
    // How to get the title and content from the request??
    fs.writeFileSync(req.body.title, req.body.content);
    res.end('ok')
})

app.put('/posts/:title', (req, res) => {
  // How to get the title and content from the request?
  // What if the request does not have a title and/or content?
  if (fs.existsSync(req.body.title)) {
    fs.writeFileSync(req.body.title, req.body.content);
    res.end('ok')
  }
  else {
    // Send response with error message
    res.end('not cool')
  }
})

app.delete('/blogs/:title', (req, res) => {
  // How to get the title from the url parameters?
  if (fs.existsSync(req.params.title)) { // Add condition here
    fs.unlinkSync(req.params.title);
    res.end('ok');
  } else {
    // Respond with message here
    res.end('not cool')
  }
})
app.get('/blogs/:title', (req, res) => {
  // How to get the title from the url parameters?
  const post = fs.readFileSync(req.params.title);
  if (post) { 
    res.end(post);
  }else{
    res.end('ops')
  }
  // check if post exists
  
  // send response
})

app.listen(3000)