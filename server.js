var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne = {
    title : "Ram Test",
    heading : "Heading",
    date: "Feb 20, 2017",
    content : "This is Ram Kris"
};

var htmlTemplate = `
<html>
  <head>
    <title>RamaRamaRama</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="/ui/style.css" rel="stylesheet" />

  </head>
  <body>
      <div class="container">
          
     
      <div>
          <a href="/" >Home</a>
      </div>
      <div> 
        <P>This is Ramakrishnan</P>
      </div>
      </div>
  </body>
</html>
`;



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-oneone', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-oneone.html'));
});

app.get('/article-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});


app.get('/article-one', function (req, res) {
  res.send('article one is requested and served here');
});

app.get('/article-two', function (req, res) {
  res.send('article two is requested and served here');
});

app.get('/article-three', function (req, res) {
  res.send('article three is requested and served here');
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
