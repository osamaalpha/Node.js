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
    res.status(201).end('ok')
})

app.put('/posts/:title', (req, res) => {
  // How to get the title and content from the request?
  // What if the request does not have a title and/or content?
  const {title,content}= req.body
  if (fs.existsSync(title)) {
    fs.writeFileSync(title, content);
    res.status(200).end('ok')
  }
  else {
    // Send response with error message
    res.status(404).end('not cool')
  }
})

app.delete('/blogs/:title', (req, res) => {
  const {title} = req.params
  // How to get the title from the url parameters?
  if (fs.existsSync(title)) { // Add condition here
    fs.unlinkSync(title);
    res.status(404).end('ok');
  } else {
    // Respond with message here
    res.status(404).end('not cool')
  }
})
app.get('/blogs/:title', (req, res) => {
  // How to get the title from the url parameters?
  const {title} = req.params
  if(!title){
  res.status(400).end('please provide the title of the blog')
  }else{
    const post = fs.readFileSync(title);
  if (post) { 
    res.status(200).end(post);
  }else{
    res.status(404).end('ops')
  }
  }
  
  // check if post exists
  
  // send response
})

app.listen(3000)