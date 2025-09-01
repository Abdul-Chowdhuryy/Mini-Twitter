const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors()); app.use(bodyParser.json());

let posts = [{id:1,author:'Rafi',text:'Hello world!'}];

app.get('/api/posts', (req,res)=> res.json(posts));
app.post('/api/posts', (req,res)=>{
  const {author,text} = req.body;
  const id = posts.length? posts[posts.length-1].id+1 : 1;
  const p = {id,author,text};
  posts.push(p);
  res.json(p);
});

app.listen(4500, ()=>console.log('Mini-twitter backend on 4500'));